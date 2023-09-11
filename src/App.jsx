import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-24 '>
        <div className='md:flex my-10'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </main>
    </>
  )
}

export default App
