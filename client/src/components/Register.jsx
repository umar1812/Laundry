import React, { useState } from 'react'
import Footerlog from './Footerlog'
import Headerlog from './Headerlog'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        state: "",
        district: "",
        add: "",
        pin: "",
        pass: ""
    })
    const [agree, setAgree] = useState(false);

    const saveInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const { name, email, phone, state, district, add, pin, pass } = user;
            await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, state, district, add, pin, pass
                })
            })
            console.log("User added successfully")
            navigate("/")
        } catch (err) {
            console.log(err.message)
        }

    }
    const navLog = () => {
        navigate("/")
    }


    const checkboxHandler = () => {
        setAgree(!agree);
    }
    return (
        <>
            <Headerlog />
            <div className='register'>
                <span className='regpage'>
                    <h1 className='introreg'>Laundry
                        <br />
                        Service
                    </h1>
                    <p className='formargin2'>Doorstep Wash & Dryclean Service</p>
                    <span>
                        <p className='askregister'>Already have an account?</p>
                        <button className='registerbtn' onClick={navLog}>Sign In</button>
                    </span>
                </span>
                <span className='midportionreg'></span>

                <form action="/login" className='regform'>
                    <h1 className='reghead'>Register</h1>
                    <span className='regspan'>
                        <input onChange={(e) => { saveInput(e) }} className='inputSpace' type="text" placeholder='Name' name='name' />
                        <input onChange={(e) => { saveInput(e) }} className='inputSpace' type="text" placeholder='Email' name='email' />
                    </span>
                    <br />
                    <span className='regspan'>
                        <input onChange={(e) => { saveInput(e) }} className='inputSpace' type="text" placeholder='Phone' name='phone' />
                        <input onChange={(e) => { saveInput(e) }} className='inputSpace' type="text" placeholder='State' id='state' name='state' />
                    </span>
                    <br />
                    <span className='regspan'>
                        <input onChange={(e) => { saveInput(e) }} className='inputSpace' type="text" placeholder='District' id='dist' name='district' />
                        <input onChange={(e) => { saveInput(e) }} className='inputSpace' type="text" placeholder='Address' name='add' />
                    </span>
                    <br />
                    <span className='regspan'>
                        <input onChange={(e) => { saveInput(e) }} className='inputSpace' type="text" placeholder='Pincode' name='pin' />
                        <input onChange={(e) => { saveInput(e) }} className='inputSpace' type="password" placeholder='Password' name='pass' />
                    </span>
                    <div className='agree'>
                        <input onChange={checkboxHandler} type="checkbox" /> <a href="blank">I agree to Terms & Condition receiving marketing and promotional materials</a>
                        <br />
                        <button id='regbtn' disabled={!agree} onClick={handleSubmit}  >Register</button>
                    </div>
                </form>
            </div>

            <Footerlog />
        </>
    )
}

export default Register