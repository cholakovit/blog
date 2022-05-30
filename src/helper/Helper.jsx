import TimeAgo from "../components/TimeAgo"
import { Link } from "react-router-dom"
import { useState } from "react"
import PostAuthor from "../components/PostAuthor"
import PostExcerpt from "../components/PostExcerpt"


export function showList(items, isLoading, isSuccess, isError, error, type) {

    let content
    
    if(isLoading) { content = <p>'Loading ...'</p> }

    switch (type) {
        case 'POSTS':
            
            if (isSuccess) { content = items.map(item => <PostExcerpt item={item} />) }

            break

        case 'USERS':

            if (isSuccess) { 
    
                content = items.map(item => 
        
                <div key={item.id} className='post'>
                    <h2>Name: {item.name}</h2>
                    <h3>Username: {item.username}</h3>
                    <Link to={`${item.id}`} className='readMore'>Read More</Link>
                </div>
                )
            }
    
        default:
            break
    }
    

    if (isError) { content = <p>{error}</p> }

    return content
}

export function showSingle(item, isLoading, isSuccess, isError, error, type) {

    let content
    if(isLoading) { content = <p>'Loading ...'</p> }

    switch (type) {
        case 'POST':
            
            if (isSuccess) { 
                //console.log('items', items)
                content = 
                    <div key={item.id} className='post'>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                        <span>{item?.date ? <TimeAgo timestamp={item.date} /> : ''}</span>
                        <Link to={`/blog/edit/${item.id}`} className='readMore'>Edit</Link>
                    </div>
            }

            break

        case 'USER':

            if (isSuccess) { 
                content = 
                    <div key={item.id} className='post'>
                        <h2>{item.name}</h2>
                        <h3>Username: {item.username}</h3>
                        <h6>Email: {item.email}</h6>
                        <p>Address: {item.address.street}, {item.address.suite}, {item.address.city} - {item.address.zipcode}</p>
                        <p>Phone: {item.phone}</p>
                        <p>Website: {item.website}</p>
                        <p>Company Name: {item.company.name}</p>
                        <p>Company Catch Phrase: {item.company.catchPhrase}</p>
                        <p>Company BS: {item.company.bs}</p>
                        <Link to={`/users/edit/${item.id}`} className='readMore'>Edit</Link>
                    </div>
            }

        break
    
        default:
            break;
    }

    if (isError) { content = <p>{error}</p> }

    return content
}
