const Comment = require('../models/comment-model')

createComment = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to create',
        })
    }

    const comment = new Comment(body)

    if (!comment) {
        return res.status(400).json({ success: false, error: err })
    }

    comment
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: comment._id,
                message: 'Comment saved!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Comment could not be saved',
            })
        })
}

updateComment = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Comment.findOne({ _id: req.params.id }, (err, comment) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Comment not found!',
            })
        }
        comment.name = body.name
        comment.time = body.time
        comment.rating = body.rating
        comment
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: comment._id,
                    message: 'Comment updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Comment could not be updated',
                })
            })
    })
}

deleteComment = async (req, res) => {
    await Comment.findOneAndDelete({ _id: req.params.id }, (err, comment) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!comment) {
            return res
                .status(404)
                .json({ success: false, error: `Comment not found` })
        }

        return res.status(200).json({ success: true, data: comment })
    }).catch(err => console.log(err))
}

getCommentById = async (req, res) => {
    await Comment.findOne({ _id: req.params.id }, (err, comment) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!comment) {
            return res
                .status(404)
                .json({ success: false, error: `Comment not found` })
        }
        return res.status(200).json({ success: true, data: comment })
    }).catch(err => console.log(err))
}

getComments = async (req, res) => {
    await Movie.find({}, (err, comments) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!comments.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: comments })
    }).catch(err => console.log(err))
}

module.exports = {
    createComment,
    updateComment,
    deleteComment,
    getComments,
    getCommentById,
}