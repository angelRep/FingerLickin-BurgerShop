// Write all the code here
import React from "react";
import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import menus from "./MenuDetails.js";

const Menu = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  const addToCartHandler = (itemNum) => {};

  function createMenuCard(item) {
    return <MenuCard 
            key={item.id}
            itemNum={item.id} 
            burgerSrc={item.burgerSrc} 
            price={item.price} 
            title={item.title}
            handler={addToCartHandler} 
            delay={0.1} />
  }

  //menus.filter((item) => item.category==="burger").map((item) => console.log(item));
  return (
    <section className="menu" id="menu">
      <motion.div {...options}>
        <h1>Menu</h1>

        <div id="#section1">
            <h4>Burgers</h4>
            <div className="menu-section">
                {menus.filter((item) => item.category==="burger").map((item) => createMenuCard(item))}
            </div>
        </div>

        <div id="#section2">
            <h4>Premium Burgers</h4>
            <div className="menu-section">
            {menus.filter((item) => item.category==="premium-burger").map((item) => createMenuCard(item))}
            </div>
        </div>

        <div id="#section3">
            <h4>Side Dishes</h4>
            <div className="menu-section">
                {menus.filter((item) => item.category==="side-dishes").map((item) => createMenuCard(item))}
            </div>
        </div>

        <div id="#section4">
            <h4>Drinks</h4>
            <div className="menu-section">
                {menus.filter((item) => item.category==="drinks").map((item) => createMenuCard(item))}
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;
