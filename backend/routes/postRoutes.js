const express = require('express');
const router = express.Router();
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const { getAllComments } = require('../controllers/commentController');
const protect = require('../middleware/authMiddleware');

router.use('/:postId/comments', require('./commentRoutes'));

router.route('/').get(getPosts).post(protect, createPost);
router.route('/comments').get(getAllComments);
router
  .route('/:id')
  .get(getPost)
  .put(protect, updatePost)
  .delete(protect, deletePost);

module.exports = router;
