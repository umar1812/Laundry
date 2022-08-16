import "./header.css"
import { NavLink } from 'react-router-dom'

import logout from "../assests/logout-svgrepo-com.svg"
const Header = () => {

    const handlelogout = () => {
        localStorage.clear();
        window.history.forward()
        console.log("logged out")
    }
    return (
        <div>
            <header>
                <h3 className="orderhead">LAUNDRY</h3>
                <nav className="nav">
                    <ul >
                        <p>Home</p>
                        <p>Price</p>
                        <p>Career</p>
                        <span className="navlist2">

                            <p id="navlist3"> User Name</p>
                            <NavLink to={"/"} ><img className='logout-logo' src={logout} onClick={handlelogout} alt="logout" /></NavLink>



                        </span>
                    </ul>
                </nav>
            </header>
        </div>
    )
}


export default Header;
