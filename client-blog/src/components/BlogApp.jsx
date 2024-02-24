import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
import CreateBlog from './CreateBlog'
import Details from './Details'
export default function BlogApp() {
    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/blogs' element={<Home></Home>}></Route>
                    <Route path='/blog/new' element={<CreateBlog></CreateBlog>} > </Route>
                    <Route path='/blog/:blogId' element={<Details></Details>}></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    )
}
