// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri"; 
import me from "../../assets/myAvatar.svg";

const About = () => { return (
    <section className="about">
       <main>
        <h1>About Us</h1>
        
        <article>
            <h4>Finger Lickin' Burger Shop</h4>
            <p>
            This is Burger Shop. The place for most tasty burgers on the entire planet.
            </p>
            <p>
            Explore the various type of burgers and side dishes. Click below to see the menu
            </p>
            <Link to="/">
            <RiFindReplaceLine />
            </Link>
        </article>

        <div>
            <h2>Founder</h2>
                
            <article>
                <img src={me} alt="Founder" />
                <div>
                    <h3>Angeliki</h3>
                    <p>
                        I am Angeliki, the founder of Finger Lickin' Burger Shop.
                    </p>
                </div>
                
            </article>
        </div>

        </main>
    </section>
);
};
export default About;