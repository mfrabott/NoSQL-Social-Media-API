const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  removeThought,
  createReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thougthId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId/reactions')
  .post(createReaction)
  .delete(removeReaction);

module.exports = router;
