import { useGetUsersQuery } from "./usersSlice"
import { showList } from '../../helper/Helper'
import { Link } from "react-router-dom"

const List = () => {

    const { data: users, isLoading, isSuccess, isError, error } = useGetUsersQuery()

    const type = 'USERS'

    let content = showList(users, isLoading, isSuccess, isError, error, type)

    return (
        <div className="page"><Link to={'/users/new'} className='readMore'>Create New User</Link>{content}</div>
    )
}

export default List