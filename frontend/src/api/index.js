import axios from 'axios'

const api = axios.create({
    baseURL: 'localhost:3000/api/',
})

export const insertComment = payload => api.post(`comment`, payload)
export const getAllComments = () => api.get(`comments`)
export const updateCommentById = (id, payload) => api.put(`comment/${id}`, payload)
export const deleteCommentById = id => api.delete(`comment/${id}`)
export const getCommentById = id => api.get(`comment/${id}`)

const apis = {
    insertComment,
    getAllComments,
    updateCommentById,
    deleteCommentById,
    getCommentById,
}

export default apis