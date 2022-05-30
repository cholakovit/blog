import { useGetUsersQuery } from "../main/users/usersSlice"
import { Link } from "react-router-dom"

const PostAuthor = ({ userId }) => {
    const { data: users, isLoading, isSuccess, isError, error } = useGetUsersQuery()

    let author
    if(isSuccess) {
        author = users.find(user => Number(user.id) === Number(userId))
    }

    return  <span>
                <br />by {author ? <Link to={`/users/${userId}`} className='blogAuthor'>{author.name}</Link> : 'Unknown author'}
            </span>
}

export default PostAuthor