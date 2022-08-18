import React from 'react'
import Footer from './Footerlog'
import Headerlog from './Headerlog'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    let disabled = true;
    const navigate = useNavigate()
    const [id, setId] = useState("");
    const [pass, setPass] = useState("")

    let user = {
        "id": id,
        "pass": pass
    }



    const handleSubmit = async (e) => {
        try {
            console.log(user)
            e.preventDefault();
            const res = await axios.post("http://localhost:5000/login", user, { withCredentials: true, credentials: 'include' })
            localStorage.setItem("user", res.data)
            navigate("/order/history")

        } catch (err) {
            window.alert("Invalid credentials")
        }

    }
    const navReg = () => {
        navigate("/register")
    }

    if (user.id !== "" && user.pass !== "") {
        disabled = false
    }

    return (
        <>
            <Headerlog />
            <div className='login'>
                <span className='logpage'>
                    <h1 className='intro'>Laundry
                        <br />
                        Service
                    </h1>
                    <p className='formargin'>Doorstep Wash & Dryclean Service</p>
                    <span>
                        <p className='askregister'>Don't have an account?</p>
                        <button className='registerbtn' onClick={navReg}>Register</button>
                    </span>
                </span>

                <span className='midportion'></span>

                <form method='POST' className='loginform'>
                    <h1 className='signHead'>Sign In</h1>
                    <br />
                    <input autoComplete='off' type="text" placeholder='Mobile/Email' name='id' id='id' onChange={(e) => { setId(e.target.value) }}></input>
                    <br />
                    <br />
                    <input type="password" placeholder='Password' className='password' name='pass' id='pass' onChange={(e) => { setPass(e.target.value) }}></input>
                    <p className='frgt'>Forgot password?</p>
                    <button onClick={handleSubmit} className='signInBtn' disabled={disabled}>Sign In</button>
                </form>
            </div>
            <Footer />

        </>
    )
}

export default Login