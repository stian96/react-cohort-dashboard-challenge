import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import PostForm from './components/post/PostForm'
import Post from './components/post/Post'
import { PostComment, PostType, UserType } from './types/types'
import { UserProvider } from './contexts/UserContext';
import { PostProvider } from './contexts/PostContext';


const App = () => {
  const [comments, setComments] = useState<PostComment[]>([]);

  return (
    <UserProvider>
      <PostProvider>
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
      </PostProvider>
    </UserProvider>
  )
}

export default App
