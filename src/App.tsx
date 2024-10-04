import React from 'react';
import './App.css'
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import PostForm from './components/post/PostForm'
import Post from './components/post/Post'
import { UserProvider } from './contexts/UserContext';
import { PostProvider } from './contexts/PostContext';
import { CommentProvider } from './contexts/CommentContext';


const App = () => {

  return (
    <UserProvider>
      <PostProvider>
        <CommentProvider>
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
        </CommentProvider>
      </PostProvider>
    </UserProvider>
  )
}

export default App
