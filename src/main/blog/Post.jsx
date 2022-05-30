import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Forms from "../../components/Forms"
import { useGetUsersQuery } from "../users/usersSlice"
import { useAddPostMutation, useUpdatePostMutation } from "./postSlice"

const Post = () => {
    const { postId } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [postContent, setpostContent] = useState('')
    const [userId, setUserId] = useState()

    //console.log('postId', postId)

    const { data: users, isLoading, isSuccess, isError, error } = useGetUsersQuery()

    if(postId) {
        //console.log('yes')
        const [updatePost] = useUpdatePostMutation()
    }else {
        //console.log('no')
        const [addPost] = useAddPostMutation()
    }

    const canSave = [title, postContent].every(Boolean)

    const onSubmit = async () => {
        console.log('onSubmit')
        console.log('userId', userId)
    }

    let content
    if(isSuccess) {
        let postForm = {
            'formFields': {
                "title": "",
                "content": ""
            }
        }
        content = <Forms form={postForm} />
    }

    return (
        <div className="page">{content}</div>
    )
}

export default Post