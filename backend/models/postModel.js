const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    imageUrl: {
      type: String,
      default: '',
    },
    body: {
      type: String,
      required: [true, 'Please add a body'],
    },
    category: {
      type: String,
      required: [true, 'Please select a category'],
      enum: ['Programming', 'Sports', 'Misc.'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', postSchema);
