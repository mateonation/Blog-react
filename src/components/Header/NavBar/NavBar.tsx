import './NavBar.css';

const NavBar=()=>(
    <nav>
        <ul>
            <li>
                <a href='/home'>Home</a>
            </li>
            <li>
                <a href='/users'>Users</a>
            </li>
            <li>
                <a href='/posts'>Posts</a>
            </li>
            <li>
                <a href='/register'>Register</a>
            </li>
        </ul>
    </nav>
);

export default NavBar;