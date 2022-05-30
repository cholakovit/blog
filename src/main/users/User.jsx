import { useParams } from 'react-router-dom'
import { showSingle } from '../../helper/Helper'
import { useGetUserByIdQuery } from './usersSlice'

const User = () => {
    const { userId } = useParams()

    const { data: user, isLoading, isSuccess, isError, error } = useGetUserByIdQuery(Number(userId))
    
    const type = 'USER'

    let content = showSingle(user, isLoading, isSuccess, isError, error, type)

    return (
        <div className='page'>{content}</div>
    )
}

export default User