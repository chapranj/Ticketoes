import React, { useState } from "react"
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";


export default function CreateBlog() {


    const [snippet, setSnippet] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    async function formSubmit(values) {
        const newBlog = {
            title: values.title,
            snippet: values.snippet,
            body: values.body
        }
        console.log(newBlog)
        try {
            const response = await axios.post(`http://localhost:3000/blogs`, newBlog);
            if(response){
                console.log(response.data)
            }
            navigate('/');

        }
        catch{
            console.log("Error!");
        }

    }

    return (

        <div className="container">
            <h1 className="text-3xl font-semibold mb-4">Enter Blog Details</h1>

            <Formik
                initialValues={{ title, snippet, body }}
                onSubmit={(values)=>formSubmit(values)}
                enableReinitialize={false}
            >
                <Form>
                    <fieldset className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <Field id="title" name="title" type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </fieldset>
                    <fieldset className="mb-4">
                        <label htmlFor="snippet" className="block text-sm font-medium text-gray-700">Snippet</label>
                        <Field id="snippet" name="snippet" type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </fieldset>
                    <fieldset className="mb-4">
                        <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body</label>
                        <Field id="body" name="body" as="textarea" rows="3" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </fieldset>

                    <div>
                        <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                            Submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>


    )
}