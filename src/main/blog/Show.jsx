import { useParams } from 'react-router-dom'
import { useGetPostByIdQuery } from './postSlice'
import { showSingle } from '../../helper/Helper'

const Post = () => {
    const { postId } = useParams()

    const { data: post, isLoading, isSuccess, isError, error } = useGetPostByIdQuery(Number(postId))

    const type = 'POST'

    let content = showSingle(post, isLoading, isSuccess, isError, error, type)

    return (
        <div className="page">
            {content}
        </div>
    )
}

export default Post