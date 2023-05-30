import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './routes/About/About.jsx';
import Home from './routes/Home/Home.jsx';
import FAQ from './routes/FAQ/FAQ.jsx';
import Products from './routes/Products/Products.jsx';
import Contact from './routes/Contact/Contact.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/FAQ',
    element: <FAQ />
  },
  {
    path: '/Products',
    element: <Products />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
)
