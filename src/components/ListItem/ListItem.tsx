import { Link } from 'react-router-dom';
import './ListItem.css';

type ListItemProps={
    text:string;
    link:string;
};

const ListItem: React.FC<ListItemProps>=({text, link})=>(
    <div className='link'>
        <Link to={link}>{text}</Link>
    </div>
);

export default ListItem;