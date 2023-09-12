import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [ bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  };

  const handleAddReadingTime = (id, time ) => {
    const newTime = (readingTime + time);
    setReadingTime (newTime);
    // remove the read blog to bookmark
    console.log("remove blog to the bookmark", id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks) 

  }

  return (
    <>
      <Header></Header>
      <main className='max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-24 '>
        <div className='md:flex my-10'>
          <Blogs 
          handleAddToBookmark = {handleAddToBookmark} 
          handleAddReadingTime = {handleAddReadingTime}
          ></Blogs>
          <Bookmarks 
          bookmarks = {bookmarks}
          readingTime = {readingTime} 
          ></Bookmarks>
        </div>
      </main>
    </>
  )
}

export default App
