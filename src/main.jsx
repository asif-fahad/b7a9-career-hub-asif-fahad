import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Statistics'
import AppliedJobs from './AppliedJobs'
import Blog from './Blog'
import JobDetails from './JobDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/category.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch('/jobs.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >
    <App />
  </RouterProvider>,
)
