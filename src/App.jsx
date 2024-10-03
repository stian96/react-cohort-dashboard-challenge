import './App.css'
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import PostForm from './components/post/PostForm'

const App = () => {

  return (
    <div className='app'>
      <Header />
      <div className='main-content'>
        <Navigation />
        <div className='feed'>
          <PostForm />
        </div>
      </div>
    </div>
  )
}

export default App
