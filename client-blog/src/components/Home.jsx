import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    const [blogs, setBlogs] = useState([])

    const [errorMsg, setErrorMsg] = useState('')

    useEffect(
        () => {
            refreshBlogs()
        }, [blogs]
    );

    async function refreshBlogs() {
        try {
            const response = await axios.get(`http://localhost:3000/blogs`)
            if (response) {
                setBlogs(response.data)
                setErrorMsg(null)
                console.log(blogs);
            }
            else {
                setErrorMsg("No Blogs Found!")
            }
        }
        catch {
            console.log("error")
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-4">All Blogs</h2>
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map(blog => (
                    <div key={blog._id} className="bg-white p-4 rounded-lg shadow">
                        <Link to={`/blog/${blog._id}`} className='block'>
                            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>

                            <img src={blog.snippet} alt="" width="400"/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};


