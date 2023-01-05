import React from 'react'
import "../Styles/Login.css";


function Signup() {
    return (
        <div>

            <form>
                Login: <input type="text" name="login"></input>
                Name: <input type="text" name="name"></input>
                E-mail: <input type="email" name="email"></input>
                Password: <input type="password" name="password"></input>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Signup