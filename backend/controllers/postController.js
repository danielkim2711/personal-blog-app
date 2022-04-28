const asyncHandler = require('express-async-handler');

const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

// @desc    Get posts
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });

  res.status(200).json(posts);
});

// @desc    Get post
// @route   GET /api/posts/:id
// @access  Public
const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }

  res.status(200).json(post);
});

// @desc    Create post
// @route   POST /api/posts
// @access  Private
const createPost = asyncHandler(async (req, res) => {
  const { title, imageUrl, body, category } = req.body;

  if (!title || !body || !category) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  const post = await Post.create({
    user: req.user._id,
    title,
    imageUrl,
    body,
    category,
  });

  res.status(201).json(post);
});

// @desc    Update post
// @route   PUT /api/posts/:id
// @access  Private
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }

  if (post.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not Authorised');
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPost);
});

// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }

  if (post.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not Authorised');
  }

  await Comment.find({ post: req.params.id }).remove();
  await post.remove();

  res.status(200).json({ _id: req.params.id, success: true });
});

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
