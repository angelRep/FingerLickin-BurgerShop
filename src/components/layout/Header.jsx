// Write all the code here
// import React from "react";
// import DropdownMenu from "./DropdownMenu";
// import Logo from "../../assets/Logo.svg";

// const Header = () => {
//     return(
//         <header>
//             <a href="/"><img src={Logo} alt="Finger'Lickin Burgers LOGO" height="100" width="100" /></a>
//             <DropdownMenu />
//         </header>
//     );
// }
import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi"; 
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion"; 
import DropdownMenu from './DropdownMenu';
import Logo from "../../assets/Logo.svg";
import {
    MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn,
    MDBIcon, MDBInput, MDBCheckbox,
    } from "mdb-react-ui-kit";

// initial={{ x: "-100%" }} whileInView={{ x: 0 }}
const Header = ({ isAuthenticated = false }) => { 
    return (
    <header>
        {/* <div className="user-menu">   */}
            
        {/* </div> */}
        <nav className="small-nav">
                <div className="menu">
                    <a href="/cart" className="menu-item">
                        <FiShoppingCart />
                    </a>
                    <a href="/profile" className="menu-item">
                        <FaUser />
                    </a>
                </div>

                <DropdownMenu />  
        </nav>

        <div className="main-menu">
            <motion.div animate={{ rotate: 360 }}
                    transition={{
                        type: "spring",
                        damping: 20,
                        mass: 0.95,
                        stiffness: 100,
                    }}>
                <a href="/"><img src={Logo} alt="Finger'Lickin Burgers LOGO" height="100px" width="100px" /></a>
            </motion.div>

            <nav>
                <div className="menu">
                    <a href="/" className="menu-item">Home</a>
                    <a href="/contact" className="menu-item">Contact</a>
                    <a href="/about" className="menu-item">About</a>
                </div>
            </nav>

        </div>
    </header>
);
};
export default Header;