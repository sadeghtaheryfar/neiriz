import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router ,Route,Routes, createBrowserRouter, createRoutesFromElements,RouterProvider } from "react-router-dom";
import HomeLeyout from './leyouts/HomeLeyout';
import Home from './pages/home/Home';
import './input.css';
import NotFoundPage from './components/NotFoundPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import Blog from './pages/blog/Blog';
import Store from './pages/store/Store';
import AboutUs from './pages/aboutUs/AboutUs';
import Policy from './pages/policy/Policy';
import Contact from './pages/contact/Contact';

const queryClient = new QueryClient();
const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<HomeLeyout />}>
          <Route index={true} element={<Home />} />
          <Route path={'/blog'} element={<Blog />} />
          <Route path={'/store'} element={<Store />} />
          <Route path={'/about-us'} element={<AboutUs />} />
          <Route path={'/policy'} element={<Policy />} />
          <Route path={'/contact'} element={<Contact />} />
      </Route>

      <Route path="*"  element={<NotFoundPage/>}/>
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers} />
    </QueryClientProvider>
  </React.StrictMode>
);