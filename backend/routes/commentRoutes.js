const express = require('express');
const router = express.Router();
const {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} = require('../controllers/postController');

router.route('/').get(getComments).post(createComment);
router.route('/:id').put(updateComment).delete(deleteComment);

module.exports = router;
