// Write all the code here
import React from "react";
import LogoBW from "../../assets/LogoBW.svg";
import fbIcon from "../../assets/facebook.svg";
import inIcon from "../../assets/instagram.svg";
import ytIcon from "../../assets/youtube.svg";

const Footer = () => {
    return(
        <footer>
            <div>
                <img className="logo" src={LogoBW} alt="Logo" width="200"  />
                <h2>Fingerlickin'burger</h2>
                <p>We are trying to give you the best taste possible.</p>
            </div>
            <div className="social-media">
                <h3>Follow Us</h3>
                <a href="https://facebook.com/" target="_blank">
                    <img src={fbIcon} alt="Facebook Icon" width="50" height="50"/>
                </a>
                <a href="https://instagram.com/" target="_blank">
                    <img src={inIcon} alt="Instagram Icon" width="50" height="50"/>
                </a>
                <a href="https://youtube.com/" target="_blank">
                    <img src={ytIcon} alt="Youtube Icon" width="50" height="50"/>
                </a>
            </div>
            <div className="subfooter">
                <p>All right received @fingerlickin'burger. Copyright {new Date().getFullYear()}</p>
            </div>
            
        </footer>
    );
}

export default Footer;