import './App.css'
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'

const App = () => {

  return (
    <div className='app'>
      <Header />
      <div className='main-content'>
        <Navigation />
        <div className='feed'>
          {/* TODO: Add post form and Posts component */}
        </div>
      </div>
    </div>
  )
}

export default App
