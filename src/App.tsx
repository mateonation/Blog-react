import './App.css';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RootLayout from './routes/Root';
import Home from './routes/Home';

const router=createBrowserRouter([{
    path:'/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
            index:true,
            element: <Navigate to="/home" replace />,
        },
        {
            path: 'home',
            element: <Home />,
        }
    ]
},
    {
        path:'*',
        element: <NotFoundPage />
    }
]);

const App=()=><RouterProvider router={router}/>
export default App;