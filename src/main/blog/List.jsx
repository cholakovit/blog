import { useGetPostsQuery } from './postSlice' 
import { showList } from '../../helper/Helper'
import { Link } from 'react-router-dom'

const List = () => {

    const { data: posts, isLoading, isSuccess, isError, error } = useGetPostsQuery()

    const type = 'POSTS'

    let content = showList(posts, isLoading, isSuccess, isError, error, type)

    return ( <div className='page'><Link to={'/blog/new'} className='readMore'>Create New Post</Link>{content}</div> )
}

export default List