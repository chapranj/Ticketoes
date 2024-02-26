import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [preview, setPreview] = useState('');
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: '',
      snippet: null,
      body: ''
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("body", values.body);
      formData.append("snippet", values.snippet);
      console.log(formData);
      try {
        const response = await axios.post(`http://localhost:3000/blogs`, formData);
        if (response) {
          console.log(response.data)
        }
        navigate('/');
      } catch {
        console.log("Error!");
      }
    }
    // onSubmit:(values)=>{
    //     console.log(values)
    // }
  });

  return (
    <div className="container">
      <h1 className="text-3xl font-semibold mb-4">Enter Blog Details</h1>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <fieldset className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input id="title" {...formik.getFieldProps('title')} type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </fieldset>
        <fieldset className="mb-4">
          <label htmlFor="snippet" className="block text-sm font-medium text-gray-700">Snippet</label>
          <input
            id="snippet"
            name="snippet"
            type="file"
            onChange={(e) => {
              let reader = new FileReader();
              reader.onload = () => {
                if (reader.readyState === 2) {
                  setPreview(reader.result);
                  formik.setFieldValue("snippet", reader.result);
                }
              }
              reader.readAsDataURL(e.target.files[0])
            }}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </fieldset>
        <fieldset className="mb-4">
          <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body</label>
          <textarea id="body" {...formik.getFieldProps('body')} rows="3" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </fieldset>
        <div>
          <img src={preview} width="200" />
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
