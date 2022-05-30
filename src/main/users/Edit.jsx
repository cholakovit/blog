import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useGetUserByIdQuery } from "./usersSlice"

const Edit = () => {

    const { userId } = useParams()
    const navigate = useNavigate()

    const { data: user, isLoading, isSuccess, isError, error } = useGetUserByIdQuery(Number(userId))

    const [name, setName] = useState(user?.name)
    const [username, setUsername] = useState(user?.username)
    const [email, setEmail] = useState(user?.email)
    const [street, setStreet] = useState(user?.address?.street)
    const [suite, setSuite] = useState(user?.address?.suite)
    const [city, setCity] = useState(user?.address?.city)
    const [zipcode, setZipcode] = useState(user?.address?.zipcode)
    const [phone, setPhone] = useState(user?.phone)
    const [website, setWebsite] = useState(user?.website)
    const [companyName, setCompanyName] = useState(user?.company?.name)
    const [catchPhrase, setCatchPhrase] = useState(user?.company?.catchPhrase)
    const [bs, setBs] = useState(user?.company?.bs)

    //console.log('Edit user page', user.name)

    const canSave = [name, username, email].every(Boolean)

    if (isError) {
        return (
            <section>
                <h2>{error}</h2>
            </section>
        )
    }

    const onSubmit = async () => {
        if(canSave) {


        }
    }
    
    const onDelete = async () => {

    }

    let content

    if(isLoading == false) {

      content =
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
  
            <button type="button" onClick={onDelete}>DELETE</button>
        </form>
    }

    return (
        <div className="page">
            <h1>Edit User</h1>
            <hr />
            {content}
        </div>
    )
}

export default Edit