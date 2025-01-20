import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
export default function Trend({category, hashtag, postsNumber}){
    return(
        <div className="trend">
            <div>
                <span>{category} Trending</span>
                <h4>#{hashtag}</h4>
                <span>{postsNumber} posts</span>
            </div>
                <MoreHorizIcon/>
        </div>
    );
}