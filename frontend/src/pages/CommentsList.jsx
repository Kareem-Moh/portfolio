import React, { useEffect, useState } from 'react'
import { getAllComments } from '../api'

const CommentsList = (props) => {

    const [commentList, setCommentList] = useState([])
    const [columns, setColumns] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchComments = 

    useEffect(() => {
        getAllComments().then(comments => {
            setCommentList(comments.data.data)
            setIsLoading(false)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    console.log(columns)
    return (
        <div>
            <p>Comment list form</p>
        </div>
    )
}

export default CommentsList