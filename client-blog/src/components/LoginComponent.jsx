import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function LoginComponent() {
    const [username, setUsername] = useState("pranjal");
    const [password, setPassword] = useState("pass");
    const [errorMessage, setErrorMessage] = useState(false);
    const navigate = useNavigate();
    const auth = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if (auth.login(username, password)) {
            setErrorMessage(false);
            navigate(`/blogs`);
            console.log(username + ": " + password);
        } else {
            setErrorMessage(true);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Log In</h1>
            {errorMessage && <div className="text-red-500 mb-4">Authentication failed!</div>}
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="username">User Name:</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div>
                    <button
                        className="w-full bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
