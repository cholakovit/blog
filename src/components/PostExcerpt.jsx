import { Link } from "react-router-dom"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import { parseISO, formatDistanceToNow } from 'date-fns'


const PostExcerpt = ({ item }) => {

    return (
        <div key={item.id} className='post'>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <span>{item?.date ? <TimeAgo timestamp={item.date} /> : ''}</span>
            <PostAuthor userId={item?.userId} />
            <Link to={`${item.id}`} className='readMore'>Read More</Link>
        </div>
    )
}

export default PostExcerpt