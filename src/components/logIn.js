import { useState } from "react";



const LogIn = () => {

    const initialState = {
        user: '',
        password: ''
    }
    const [credentials, setCredentials] = useState(initialState)

    const submit = (event) => {
        event.preventDefault()
        console.log('Submitted', credentials)
    }


    const handleUserChange = (event) => {
        setCredentials({
            ...credentials, user: event.target.value
        })
    }
    const handlePasswordChange = (event) => {
        setCredentials({
            ...credentials, password: event.target.value
        })
    }


    return (
        <div className="form-wrapper">
            <h1 className="form-title">Log In</h1>
            <form onSubmit={submit} className="form" >

                <input
                    value={credentials.user}
                    onChange={handleUserChange}
                    htmlFor="User" placeholder="User" className="form-field" type="text" />
                <input
                    value={credentials.password}
                    onChange={handlePasswordChange}
                    htmlFor="Password" placeholder="Password" className="form-field" type="password" />

                <button className="btn" >Acceder</button>

            </form>
        </div>
    )
}

export default LogIn;