import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router=createBrowserRouter([{
    path:'/',
    element: <h1>Home</h1>,
},
    {
        path:'*',
        element: <div>ERROR 404</div>
    }
]);

const App=()=><RouterProvider router={router}/>
export default App;