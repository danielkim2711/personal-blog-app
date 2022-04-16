const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.status(200).json({ message: 'Get posts' }));
router.post('/', (req, res) =>
  res.status(201).json({ message: 'Create post' })
);
router.put('/:id', (req, res) =>
  res.status(200).json({ message: `Update post ${req.params.id}` })
);
router.delete('/:id', (req, res) =>
  res.status(200).json({ message: `Delete post ${req.params.id}` })
);

module.exports = router;
