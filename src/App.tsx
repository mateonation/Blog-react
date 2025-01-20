import './App.css';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router=createBrowserRouter([{
    path:'/',
    element: <h1>Home</h1>,
    errorElement: <ErrorPage />
},
    {
        path:'*',
        element: <NotFoundPage />
    }
]);

const App=()=><RouterProvider router={router}/>
export default App;