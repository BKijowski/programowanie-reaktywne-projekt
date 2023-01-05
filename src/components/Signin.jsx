import React from 'react'




function Signin() {
    return (
        <div className='container'>
            <form className='form'>
                E-mail: <input type="email"/>
                Password: <input type="password"/>
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Signin