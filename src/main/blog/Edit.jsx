import { useParams, useNavigate } from "react-router-dom"
import { useGetPostByIdQuery, useUpdatePostMutation, useDeletePostMutation } from './postSlice'
import { useState } from "react"

const Edit = () => {

  const { postId } = useParams()
  const navigate = useNavigate()
  const [updatePost] = useUpdatePostMutation()
  const [deletePost] = useDeletePostMutation()

  const { data: post, isLoading, isSuccess, isError, error } = useGetPostByIdQuery(Number(postId))

  const [title, setTitle] = useState(post?.title)
  const [postContent, setpostContent] = useState(post?.body)

  const canSave = [title, postContent].every(Boolean)

  const onSubmit = async () => {
    if(canSave) {
      try {
        await updatePost({ id: postId, title, body: postContent })
      } catch(err) {
        console.error('Failed to save the post', err)
      }
    }
  }

  const onDelete = async () => {
    try {
      await deletePost({ id: post.id })

      setTitle('')
      setpostContent('')
      navigate('/blog')
    } catch(err) {
      console.error('Failed to delete the post', err)
    }
  }

  if (!post) {
    return (
        <section>
            <h2>Post not found!</h2>
        </section>
    )
  }

  let content

  if(isLoading == false) {
    content =
      <form>
          <label htmlFor="title">Title:</label>
          <input type='text' name="title" value={title} onChange={ (e) => setTitle(e.target.value) } />

          <label htmlFor="content">Content:</label>
          <textarea name="content" value={postContent} onChange={ (e) => { setpostContent(e.target.value) } }></textarea>

          <button type="button" disabled={!canSave} onClick={onSubmit}>SUBMIT</button>

          <button type="button" onClick={onDelete}>DELETE</button>
      </form>
  }

  //console.log('edit', title)  

  return (
    <div className="page">
      <h1>Edit Post</h1>
      <hr />
      {content}
    </div>
  )
}

export default Edit