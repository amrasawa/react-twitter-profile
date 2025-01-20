import SearchIcon from '@mui/icons-material/Search';
import './SideBar.css';
import Account from './Accounts';
import Trend from './Trend';
export default function SideBar(){
    return (
        <div className="sidebar">
            <div className="search-bar">
                <SearchIcon/>
                <input type="text" placeholder='Search' />
            </div>
            <div className='recommendations'>
                <h2>You might like</h2>
                <Account profilePhoto='/tailwindcss.png' title="Tailwind CSS"/>
                <Account profilePhoto='/freeCode.jpg' title="Free Code Camp"/>
                <Account profilePhoto='/typescript.png' title="TypeScript"/>
            </div>
            <div className='trends'>
                <h3>Trends For You</h3>
                <Trend category="Gaming" hashtag="ValorantChampions" postsNumber='27.9k'/>
                <Trend category="Istagram" hashtag="الانستا" postsNumber='1,411'/>
                <Trend category="Gaming" hashtag="Mako" postsNumber='14.1k'/>
                <Trend category="Gaming" hashtag="fnatic" postsNumber='27.9k'/>
                <Trend category="News" hashtag="الاعلام العبري" postsNumber='27.9k'/>
                <Trend category="Football" hashtag="Messi" postsNumber='27.9k'/>
                <Trend category="Football" hashtag="InterMiami" postsNumber='68.4k'/>
                <a>Show more</a>
            </div>
            <div className='footer'>
                <span>Terms of Services</span>
                <span>Privacy Policy</span>
                <span>Cookie Policy</span>
                <span>Terms of Services</span>
                <span>Accessibility</span>
                <span>Ads info</span>
                <span>More ...</span>
                <span>&#65535; 2023 X Corp</span>
            </div>
        </div>
    );
}