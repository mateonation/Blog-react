import './ErrorPage.css';
import { NavLink } from 'react-router-dom';

const ErrorPage=()=>(
    <div id='errorpage'>
        <h1>ERROR 404</h1>
        <p>An unexpected error occurred.</p>
        <NavLink to='/'>Click here to go back to home</NavLink>
    </div>
)

export default ErrorPage;