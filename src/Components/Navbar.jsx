import './navbar.css';

import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import XIcon from '@mui/icons-material/X';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NavbarItem from './NavbarItem';
import Button from './Button';
import User from './User';
//import '../assets/icon.jpeg'
function Navbar(){
    let srcImg='/icon.jpeg';
    return (
        <div className='navbar'>
            <ul className='navbar-list'>
                <li><XIcon/></li>
                <NavbarItem icon={<HomeIcon/>} title="Home"/>
                <NavbarItem icon={<SearchIcon/>} title="Explore"/>
                <NavbarItem icon={<NotificationsNoneIcon/>} title="Notification"/>
                <NavbarItem icon={<MailOutlineIcon/>} title="Message"/>
                <NavbarItem icon={<ArticleIcon/>} title="Lists"/>
                <NavbarItem icon={<BookmarkBorderIcon/>} title="Bookmarks"/>
                <NavbarItem icon={<PeopleIcon/>} title="Communities"/>
                <NavbarItem icon={<PermIdentityIcon/>} title="Profile"/>
                <NavbarItem icon={<MoreHorizIcon/>} title="More"/>
            </ul>
            <Button title="Post"/>
            <div>
                <User imgSrc={srcImg} name="AmraSawalha" />
            </div>
        </div>
    )
}
export default Navbar;