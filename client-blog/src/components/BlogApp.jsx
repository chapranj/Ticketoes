import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
import CreateBlog from './CreateBlog'
import Details from './Details'
import AuthProvider, { useAuth } from './security/AuthContext'
import Login from './Login'
import Signup from './Signup'
import { Navigate } from 'react-router-dom'
import LoginComponent from './LoginComponent'

export default function BlogApp() {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path='/blogs' element={<Home></Home>}></Route>
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/blog/new' element={<CreateBlog></CreateBlog>} />
                        <Route path='/blog/:blogId' element={<Details></Details>}></Route>
                    </Routes>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}
