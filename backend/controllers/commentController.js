const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

const User = require('../models/userModel');
const Comment = require('../models/commentModel');

// @desc    Get comments
// @route   GET /api/posts/:postId/comments
// @access  Public
const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId });

  res.status(200).json(comments);
});

// @desc    Create comment
// @route   POST /api/posts/:postId/comments
// @access  Public
const createComment = asyncHandler(async (req, res) => {
  const { name, password, body } = req.body;

  if (!name || !password || !body) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const comment = await Comment.create({
    post: req.params.postId,
    name,
    password: hashedPassword,
    body,
  });

  res.status(201).json(comment);
});

// @desc    Update comment
// @route   PUT /api/posts/:postId/comments/:id
// @access  Private
const updateComment = asyncHandler(async (req, res) => {
  const { password, body } = req.body;

  if (!password || !body) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    res.status(400);
    throw new Error('Comment not found');
  }

  if (comment && (await bcrypt.compare(password, comment.password))) {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { password: comment.password, body },
      {
        new: true,
      }
    );
    res.status(200).json(updatedComment);
  } else {
    res.status(400);
    throw new Error('Password does not match');
  }
});

// @desc    Delete comment
// @route   PUT /api/posts/:postId/comments/:id
// @access  Private
const deleteComment = asyncHandler(async (req, res) => {
  const { _id, password } = req.body;

  const user = await User.findById(_id);
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    res.status(400);
    throw new Error('Comment not found');
  }

  if (!user) {
    if (!password) {
      res.status(400);
      throw new Error('Please enter your password');
    }

    if (comment && (await bcrypt.compare(password, comment.password))) {
      await comment.remove();

      res.status(200).json({ _id: req.params.id, success: true });
    } else {
      res.status(400);
      throw new Error('Password does not match');
    }
  }

  if (user && user.isAdmin) {
    await comment.remove();

    res.status(200).json({ _id: req.params.id, success: true });
  } else {
    res.status(400);
    throw new Error('You are not authorised');
  }
});

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
};
