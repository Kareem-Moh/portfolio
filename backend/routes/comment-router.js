const express = require('express')

const CommentController = require('../controllers/comment-controller')

const router = express.Router()

router.post('/comment', CommentController.createComment)
router.put('/comment/:id', CommentController.updateComment)
router.delete('/comment/:id', CommentController.deleteComment)
router.get('/comment/:id', CommentController.getCommentById)
router.get('/comments', CommentController.getComments)

module.exports = router