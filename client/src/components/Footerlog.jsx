import React from 'react'
import fb from "./images/facebook.svg"
import insta from "./images/instagram.svg"
import linkd from "./images/linkedin.svg"

const Footerlog = () => {
    return (
        <footer>
            <div className='refer'>
                <h2 id='refer'>Now Refer & Earn ₹500 for every referral*</h2>
                <p className='terms'>* Terms and conditions will be applied</p>
            </div>
            <div className='footdiv'>
                <span className='about'>
                    <h5 className='foottitle'>ABOUT US</h5>
                    <br />
                    <p className='footcont'>Doorstep wash and dryclean service</p>
                </span>
                <span className='mid'>
                    <h5 className='foottitle'>Home</h5>
                    <br />
                    <p className='footcont'>Sign In</p>
                    <br />
                    <p className='footcont'>Register</p>
                </span>
                <span className='mid'>
                    <h5 className='foottitle'>Pricing</h5>
                </span>
                <span className='mid'>
                    <h5 className='foottitle'>Career</h5>
                    <br />
                    <p className='footcont'>Blogs</p>
                    <br />
                    <p className='footcont'>Create</p>
                </span>
                <span className='mid'>
                    <h5 className='foottitle'> Contact</h5>
                </span>
                <span>
                    <h5 className='foottitle'>Social Media</h5>
                    <ul>
                        <li className='logos'><img src={fb} alt="fb" /></li>
                        <li className='logos'><img src={insta} alt="insta" /></li>
                        <li className='logos'><img src={linkd} alt="LinkedIn" /></li>
                    </ul>
                </span>
            </div>
            <div id='bottomost'>
                <p>2021 &copy; Laundry</p>
            </div>
        </footer>
    )
}

export default Footerlog