import { useGetUsersQuery } from "../users/usersSlice"
import { useAddPostMutation } from '../blog/postSlice'
import { useState } from "react"
import { nanoid } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"

const New = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [postContent, setpostContent] = useState('')
    const [userId, setUserId] = useState()

    const [addPost] = useAddPostMutation()

    const { data: users, isLoading, isSuccess, isError, error } = useGetUsersQuery()

    const canSave = [title, postContent].every(Boolean)

    const onSubmit = async () => {
        if(canSave) {
            try {

                await addPost({ id: nanoid, title, body: postContent, userId })

                navigate('/blog')
              
            } catch(err) {
                console.error('Failed to save the post', err)
            }
        }
    }
    let selectField
    if (isSuccess) { 
        const usersOptions = users.map(user => (
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        ))

        selectField =   <span>
                            <label htmlFor="postAuthor">Author:</label>
                            <select id="postAuthor" value={userId} onChange={(e) => setUserId(e.target.value)}>
                                <option value=""></option>
                                {usersOptions}
                            </select>
                        </span>
    }
    
    return (
        <div className="page">
            <form>
                <label htmlFor="title">Title:</label>
                <input type='text' name="title" value={title} onChange={ (e) => setTitle(e.target.value) } />

                <label htmlFor="content">Content:</label>
                <textarea name="content" value={postContent} onChange={ (e) => { setpostContent(e.target.value) } }></textarea>

                <br />
                {selectField}
                <br /><br />

                <button type="button" disabled={!canSave} onClick={onSubmit}>SUBMIT</button>
            </form>
        </div>
    )
}

export default New