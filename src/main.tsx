import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './NotFound.tsx';
import Home from './pages/index.tsx';
import Vote from './pages/vote.tsx';
import Login from './pages/login.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, {
    path: '/*',
    element: <NotFound />
  }, {
    path: '/login',
    element: <Login />,
  }, {
    path: '/vote',
    element: <Vote />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
