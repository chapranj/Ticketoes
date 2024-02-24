import React from "react"
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">BlogWeb</Link>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-white hover:text-gray-300">Blogs</Link></li>
                    <li><Link to="/blog/new" className="text-white hover:text-gray-300">New Blog</Link></li>
                </ul>
            </div>
        </nav>
    );
}