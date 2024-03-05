import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function CreateBlog() {
  const [preview, setPreview] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])



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
      try {
        const response = await axios.post(`http://localhost:3000/blogs`, formData, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        if (response) {
          console.log(response.data)
        }
        navigate('/');
      } catch {
        console.log("Error!");
      }
    }
  });

  return (
    <div className="container mx-auto m-5">
      <h1 className="text-3xl font-semibold mb-4">Enter Ticket Details</h1>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            id="title"
            {...formik.getFieldProps('title')}
            type="text"
            className="form-input px-4 py-2 rounded border focus:outline-none focus:border-indigo-600"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="snippet" className="block text-sm font-medium text-gray-700 mb-2">Snippet</label>
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
              };
              reader.readAsDataURL(e.target.files[0]);
            }}
            className="form-input"
          />
        </div>
        {preview && <img src={preview} width="100" height="30" className="mr-4" />}
        <div className="mb-4">
          <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-2">Body</label>
          <textarea
            id="body"
            {...formik.getFieldProps('body')}
            rows="6"
            className="form-textarea px-4 py-2 rounded border focus:outline-none focus:border-indigo-600"
          ></textarea>
        </div>
        <div className="mb-4 flex items-center">
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

  );
}
