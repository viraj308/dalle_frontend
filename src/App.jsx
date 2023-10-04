import React from 'react'
import {HashRouter, Link, Route, Routes} from 'react-router-dom'

/* import {logo} from './assets' */
import {Home, CreatePost } from './pages'
import { Switcher } from './components'

const App = () => {
  return (
   <HashRouter>
      <header className='w-full bg-white dark:bg-[#383838] flex justify-between items-center sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] dark:border-none'>
       <Link className="text-black dark:text-white font-poppins font-bold text-[30px]" to="/ ">
        {/* <img src={logo} alt="logo" className='dark:text-white w-28 object-contain'/> */}
        VIRU
       </Link>      
       <Switcher />
       <Link to="/create-post" className='font-inter font-medium bg-purple-600 text-white px-4 py-2 rounded-md'>Create</Link>

      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] dark:bg-[#181818] min-h-[calc(100vh-73px)]'>
        <Routes>
          
          <Route path='create-post' element={<CreatePost />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
   </HashRouter>
  )
}

export default App
 