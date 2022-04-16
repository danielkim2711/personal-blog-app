// @desc    Get posts
// @route   GET /api/posts
// @access  Public
const getPosts = async (req, res) => {
  res.status(200).json({ message: 'Get Posts' });
};

// @desc    Get post
// @route   GET /api/posts/:id
// @access  Public
const getPost = async (req, res) => {
  res.status(200).json({ message: `Get Post ${req.params.id}` });
};

// @desc    Create post
// @route   POST /api/posts
// @access  Private
const createPost = async (req, res) => {
  res.status(201).json({ message: 'Create Post' });
};

// @desc    Update post
// @route   PUT /api/posts/:id
// @access  Private
const updatePost = async (req, res) => {
  res.status(200).json({ message: `Update Post ${req.params.id}` });
};

// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = async (req, res) => {
  res.status(200).json({ message: `Delete Post ${req.params.id}` });
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
