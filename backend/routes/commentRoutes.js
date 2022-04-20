const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} = require('../controllers/commentController');

router.route('/').get(getComments).post(createComment);
router.route('/:id').put(updateComment).delete(deleteComment);

module.exports = router;
