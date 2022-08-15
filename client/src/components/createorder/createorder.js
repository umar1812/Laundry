import Header from "../common/header"
import NavBar from "../common/navbar"
import Footer from "../common/footer"
import Search from "../common/search"
import Productlist from "./productlist"
import "./style.css"
//need to check authorition
const Createorder=()=>{
    return (
        <>
        <div className="create-order">
        <Header/>
        <NavBar/>
        <div>
        <h3 className="page-head">Create Order</h3>     
        </div>
        <Search/>
        <div className='page-titlebar'>
            <span className='product-type'>Product Type</span>
            <span className='quantity'>Quantity</span>
            <span className='wash-type' >Wash Type</span>
            <span className='price'>Price</span>
        </div>
        <Productlist/>
        <Footer/>
        </div>
        </>
    )
}

export default Createorder
