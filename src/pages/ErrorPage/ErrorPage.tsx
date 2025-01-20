import './ErrorPage.css';
import { NavLink } from 'react-router-dom';

const ErrorPage=()=>(
    <div id='err'>
        <h2>ERROR 404</h2>
        <p>An unexpected error occurred.</p>
        <NavLink to='/'>Click here to go back to home</NavLink>
    </div>
)

export default ErrorPage;