import './pastorders.css'
import Header from "../common/header"
import NavBar from "../common/navbar"
import Footer from "../common/footer"
import Search from "../common/search"
import { getToken } from '../Private'
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import eyeIcon from "../assests/eyeicon.svg"
import axios from "axios";
import Modal from "../modals/modal";
import Summary from '../summary/summary'

const Pastorders = () => {
    const [orders, setorders] = useState([])
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [summ, setsumm] = useState(false);
    const [price, setprice] = useState(null);
    const [cancelid, setcancelid] = useState("");
    const gotocreateorder = () => {
        navigate("/order");
    }
    const cancelOrderfunc = (id) => {
        let token = getToken()
        let header = { authorization: token }

        axios.delete(`http://localhost:5000/cancel/${id}`, { headers: header })
            .then(function (response) {
                console.log(response)
                window.location.reload();
                if (response.status === 200) {
                    console.log(response.data)
                    window.location.reload();

                }
            })
    }
    let data = useRef(null)
    useEffect(() => {
        let token = getToken()
        let header = { "authorization": token }
        data.current = axios.get('http://localhost:5000/history', { headers: header })
            .then(function (response) {
                setorders(response.data)
                console.log(response.data)
            }).catch((err) => {
                console.log(err)
            })


    }, []);

    // let status = ["In washing", "In ironing", "Ready to pickup"]

    return (

        <>

            <Header />
            <NavBar />
            <Search />
            <button className="goto2" onClick={gotocreateorder}>Create</button>
            <div><h2 className='topdiv' >Orders | 0</h2></div>

            <div className='page-titlebar'>
                <span className='orderid'>Order Id</span>
                <span className='orderdatetime'>Order Date & Time</span>
                <span className='StoreLocation' >Store Location</span>
                <span className='City'>City</span>
                <span className='StorePhone'>Store Phone</span>
                <span className='TotalItems'>Total Items</span>
                <span className='Price'>Price</span>
                <span className='Status'>Status</span>
                <span className='canc'>   </span>
                <span className='view'>view</span>

            </div>

            {orders.map((order, key) => (
                <div className='page-titlebar2 ' key={key}>
                    <span className='orderid2'>{order.userid}</span>
                    <span className='orderdatetime2'>{order.datetime}</span>
                    <span className='StoreLocation2' >JP Nagar</span>
                    <span className='City2'>Bangalore</span>
                    <span className='StorePhone2'>+91 7778 86542</span>
                    <span className='TotalItems2'>10</span>
                    <span className='Price2'>{order.subtotal + 90}Rs</span>
                    <span className='Status2'>Ready to pickup</span>
                    <button
                        className="openModalBtn"
                        onClick={() => {
                            setcancelid(order._id)
                            setModalOpen(true);
                        }}>Cancel order</button>
                    <img src={eyeIcon} className='view2' alt="err" onClick={() => {
                        setprice(order)
                        setsumm(true);
                    }}></img>

                </div>
            ))}
            {modalOpen && <Modal setOpenModal={setModalOpen} cancelid={cancelid} cancelOrderfunc={cancelOrderfunc} />}{summ && <Summary orders={price} closesummary={setsumm} />}


            <Footer />



        </>
    )


};
export default Pastorders