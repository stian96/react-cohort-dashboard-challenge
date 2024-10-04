import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import PostForm from './components/post/PostForm'
import Post from './components/post/Post'

const App = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // TODO: Fetch posts and comments from server.
  }, []);

  return (
    <div className='app'>
      <Header />
      <div className='main-content'>
        <Navigation />
        <div className='feed'>
          <PostForm />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default App
