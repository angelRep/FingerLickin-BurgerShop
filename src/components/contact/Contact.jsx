// Write all the code here
import React from "react";
import { motion } from "framer-motion"; 
import burger2 from "../../assets/menu-assets/burger2.png";
import burger3 from "../../assets/menu-assets/cheese-mania.png";  
import Popup from 'reactjs-popup';

const Contact = () => { 
    
    const resetForm = (e) => {
    };
    
    return (
        <section className="contact">
            <h1>Contact Us</h1>
            <div className="contact-flex">
                <motion.form initial={{
                x: "-100vw",
                opacity: 0,
                }}
                animate={{ x: 0,
                opacity: 1,
                }}
                transition={{ delay: 0.2 }}
                >
                    <input id="name" type="text" placeholder="Name" required />
                    <input id="email" type="email" placeholder="Email" required />
                    <textarea id="message" placeholder="Message..." cols="30" rows="10" required></textarea>
                    <Popup trigger=
                    {<button type="button">Send</button>}
                    >
                    <div style={{zIndex: "1", padding: "20px", fontSize: "20px", color:"black", transform: 'translate(0px,20px)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
                        Thank you for contacting us!
                    </div>
                    </Popup>
                </motion.form>

                <motion.div className="formBorder" initial={{
                x: "100vw", opacity: 0,
                }}
                animate={{ x: 0,
                opacity: 1,
                }}
                transition={{ delay: 0.2 }}
                >
                    <motion.div initial={{
                    y: "-100vh",
                    x: "50%",
                    opacity: 0,
                    }}
                    animate={{ x: "50%",
                    y: "-50%",
                    opacity: 1,
                    }}
                    transition={{ delay: 1,
                    }}
                    >
                        <div className="burger-div">
                            <img src={burger2} alt="Burger" />
                            <img src={burger3} alt="Burger" />
                            <img src={burger2} alt="Burger" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;