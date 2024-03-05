import React, { useEffect, useState } from 'react'
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

export default function BlogApp() {
    const { user } = useAuth();
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Navbar></Navbar>
                    <Routes>
                        <Route exact path='/' element={<Home /> } />
                        <Route exact path='/login' element={<Login /> } />
                        <Route exact path='/signup' element={<Signup />} />
                        <Route exact path='/blog/new' element={<CreateBlog />} />
                        <Route exact path='/blog/:blogId' element={<Details />} />
                    </Routes>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}
