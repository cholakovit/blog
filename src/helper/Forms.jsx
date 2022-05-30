import { useState } from "react"


export function postForm(users, userId, setUserId, onSubmit) {

    console.log('post form')

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    let selectField =   <>
                    <span>
                        <label htmlFor="postAuthor">Author:</label>
                        <select id="postAuthor" value={userId} onChange={(e) => setUserId(e.target.value)}>
                            <option value=""></option>
                            {usersOptions}
                        </select>
                    </span>
    </>


    console.log('selectField', selectField)

    let content =         
        <div className="page">
            <form>


                <br />
                {selectField}
                <br /><br />

                <button type="button" onClick={onSubmit}>SUBMIT</button>
            </form>
        </div>

    //content = 'post form'

    return content
}