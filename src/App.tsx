import './App.css';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './routes/Root';

const router=createBrowserRouter([{
    path:'/',
    element: <RootLayout />,
    errorElement: <ErrorPage />
},
    {
        path:'*',
        element: <NotFoundPage />
    }
]);

const App=()=><RouterProvider router={router}/>
export default App;