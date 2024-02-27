import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
import CreateBlog from './CreateBlog'
import Details from './Details'
import AuthProvider, { useAuth } from './security/AuthContext'
import { Navigate } from 'react-router-dom'
import LoginComponent from './LoginComponent'


function AuthenticatedRoute({ children }) {
    const auth = useAuth();
    if (auth.isAuthenticated) {
        return (
            children
        )
    }
    return <Navigate to="/"></Navigate>
}


export default function BlogApp() {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path='/' element={<LoginComponent></LoginComponent>} ></Route>
                        <Route path='/blogs' element={
                            <AuthenticatedRoute>
                                <Home></Home>
                            </AuthenticatedRoute>

                        }></Route>
                        <Route path='/blog/new' element=
                            {<AuthenticatedRoute>
                                <CreateBlog></CreateBlog>
                            </AuthenticatedRoute>} > </Route>
                        <Route path='/blog/:blogId' element={
                            <AuthenticatedRoute>
                                <Details></Details>
                            </AuthenticatedRoute>}></Route>
                    </Routes>
                    <Footer></Footer>
                </BrowserRouter>``
            </AuthProvider>
        </div>
    )
}
