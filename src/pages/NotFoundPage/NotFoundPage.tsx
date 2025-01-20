import './NotFoundPage.css';
import { NavLink } from 'react-router-dom';

const NotFoundPage=()=>(
    <div id='notfoundpage'>
        <h1>ERROR 404</h1>
        <p>The URL that you specified does not exist.</p>
        <NavLink to='/'>Click here to go back to home</NavLink>
    </div>
)

export default NotFoundPage;