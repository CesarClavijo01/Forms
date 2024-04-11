import { useState } from "react"

export default function SignUpForm({setToken, token}){
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    async function submitHandler(event) {
        event.preventDefault()
        try{
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
                method:'post',
                body:{
                    userName: userName,
                    password: password
                }
            })
            const result = await response.json()
            setToken(result.token)
            console.log(token)

        }
        catch(error){
            setError(error.message)
        }
    }

    return(
        <>
            <h2>Sign up</h2>
            {error && <p>{error}</p>}
                <form onSubmit={submitHandler}>
                <label>Name <input onChange={(event) => {setUserName(event.target.value)}} value={userName}/></label>
                <br/><br/>
                <label>Password<input value={password} onChange={(event) => {setPassword(event.target.value)}}/></label>
                <br/><br/>
                <button>Submit</button>
            </form>
        </>
    )
}