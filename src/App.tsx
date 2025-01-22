import './App.css';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RootLayout from './routes/Root';
import Home from './routes/Home';
import Posts from './routes/Posts';
import Users from './routes/Users';
import PostDetails from './routes/PostDetails';

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
            loader:Home.loader,
        },
        {
            path: 'posts',
            children:[
                {
                    index:true,
                    element: <Posts />,
                    loader:Posts.loader,
                },
                {
                    path:':postId',
                    element: <PostDetails />,
                    loader: PostDetails.loader,
                }
            ]
        },
        {
            path: 'users',
            element: <Users />,
            loader:Users.loader,
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