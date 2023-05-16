import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './routes/About.jsx';
import Home from './routes/Home.jsx';
import FAQ from './routes/FAQ.jsx';
import Products from './routes/Products.jsx';
import Contact from './routes/Contact.jsx';

import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/about',
    element: <About/>
  },
  {
    path:'/contact',
    element: <Contact/>
  },
  {
    path:'/FAQ',
    element: <FAQ/>
  },
  {
    path:'/Products',
    element: <Products/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
