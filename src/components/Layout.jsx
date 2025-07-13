import React from 'react'  
import { Outlet } from 'react-router-dom'
import Navbar from '../modules/Todo-list/Navbar'


function Layout() {
  return (
    <div className='min-h-screen bg-base-200'>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
export default Layout