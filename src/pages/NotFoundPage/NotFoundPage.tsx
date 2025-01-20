import './NotFoundPage.css';
import { NavLink } from 'react-router-dom';

const NotFoundPage=()=>(
    <div id='notfoundpage'>
        <h1>ERROR 404</h1>
        <p>An unexpected error occurred.</p>
        <NavLink to='/'></NavLink>
    </div>
)

export default NotFoundPage;