import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";


export default function Details() {
    const { blogId } = useParams();
    
    const navigate = useNavigate();

    const [blog, setBlog] = useState(null);
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(
        () => {
            loadBlog(blogId);
        }, [blogId]
    );

    async function loadBlog(id) {
        try {
            const response = await axios.get(`http://localhost:3000/blogs/${id}`)
            if (response.data) {
                setBlog(response.data);
                console.log(response.data.snippet);
            }
            else {
                setErrorMsg("No Blog Found!")
            }
        }
        catch {
            console.log("Did not work");
        }
    }

    async function handleDelete(id) {
        try {
            await axios.delete(`http://localhost:3000/blogs/${id}`)
            navigate('/');
        }
        catch {
            console.log("Did not work");
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white shadow-md rounded-lg p-8">
                {blog ? (
                    <>
                        <h2 className="text-3xl font-semibold mb-4">
                            {blog.title}
                        </h2>
                        <div className="content text-gray-700">
                            <p>
                                <img src={blog.snippet} alt="" />
                            </p>
                        </div>
                        <div className="content text-gray-700">
                            <p>
                                {blog.body}
                            </p>
                        </div>
                        <button className="delete mt-4 bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600" onClick={()=>handleDelete(blog._id)}  >Delete</button>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )

}
