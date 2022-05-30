import { useAddUserMutation } from "./usersSlice"
import { useState } from "react"
import { nanoid } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"

const New = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [suite, setSuite] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [phone, setPhone] = useState('')
    const [website, setWebsite] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [catchPhrase, setCatchPhrase] = useState('')
    const [bs, setBs] = useState('')

    const [addUser] = useAddUserMutation()

    const canSave = [name, username, email].every(Boolean)


    const onSubmit = async () => {
        if(canSave) {
            try {

                await addUser({ id: nanoid, name, username, email, phone, website, 
                    address: {street: street, suite: suite, city: city, zipcode: zipcode},
                    company: {name: companyName, catchPhrase: catchPhrase, bs: bs}})

                //navigate('/users')
              
            } catch(err) {
                console.error('Failed to save the post', err)
            }
        }
    }

    return (
        <div className="page">
            <h1>New User</h1>
            <hr />
            <form>
                <label htmlFor="name">Name: *</label>
                <input type='text' name="name" value={name} onChange={ (e) => setName(e.target.value) } />
    
                <label htmlFor="username">Username: *</label>
                <input type='text' name="username" value={username} onChange={ (e) => setUsername(e.target.value) } />
    
                <label htmlFor="email">Email: *</label>
                <input type='text' name="email" value={email} onChange={ (e) => setEmail(e.target.value) } />

                <label htmlFor="street">Street:</label>
                <input type='text' name="street" value={street} onChange={ (e) => setStreet(e.target.value) } />

                <label htmlFor="suite">Suite:</label>
                <input type='text' name="suite" value={suite} onChange={ (e) => setSuite(e.target.value) } />

                <label htmlFor="city">City:</label>
                <input type='text' name="city" value={city} onChange={ (e) => setCity(e.target.value) } />

                <label htmlFor="zipcode">Zipcode:</label>
                <input type='text' name="zipcode" value={zipcode} onChange={ (e) => setZipcode(e.target.value) } />

                <label htmlFor="phone">Phone:</label>
                <input type='text' name="phone" value={phone} onChange={ (e) => setPhone(e.target.value) } />

                <label htmlFor="website">Website:</label>
                <input type='text' name="website" value={website} onChange={ (e) => setWebsite(e.target.value) } />

                <label htmlFor="companyName">Company Name:</label>
                <input type='text' name="companyName" value={companyName} onChange={ (e) => setCompanyName(e.target.value) } />

                <label htmlFor="catchPhrase">Company Catch Phrase:</label>
                <input type='text' name="catchPhrase" value={catchPhrase} onChange={ (e) => setCatchPhrase(e.target.value) } />

                <label htmlFor="bs">Company BS:</label>
                <input type='text' name="bs" value={bs} onChange={ (e) => setBs(e.target.value) } />

                <br /><br /><br />

                <button type="button" disabled={!canSave} onClick={onSubmit}>SUBMIT</button>
            </form>
        </div>
    )
}

export default New