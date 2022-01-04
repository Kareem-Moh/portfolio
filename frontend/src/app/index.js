import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { NavBar } from '../components'
import { CommentsList, CommentsInsert, CommentsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <Router style={{margin:0}}>
            <NavBar />
            <Routes>
                <Route path="/comments/list" exact element={CommentsList()} />
                <Route path="/comments/create" exact element={CommentsInsert()} />
                <Route
                    path="/comments/update/:id"
                    exact
                    element={CommentsUpdate()}
                />
            </Routes>
        </Router>
    )
}

export default App