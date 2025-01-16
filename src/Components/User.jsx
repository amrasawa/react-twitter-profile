import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
export default function User({imgSrc, name}){
    return (
        <div className="user">
            <img src={imgSrc} alt="user"/>
            <h1>{name}</h1>
            <span>@{name}</span>
            <MoreHorizIcon className='user-more'/>
        </div>
    )
}