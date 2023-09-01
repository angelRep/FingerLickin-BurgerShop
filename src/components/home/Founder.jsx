import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/myAvatar.svg";
const Founder = () => {
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

  return (
    <section className="founder">
      <motion.div {...options} className="flex-div">
        <img src={me} alt="Founder" height={200} width={200} />
      
        <div>
          <h3>Angeliki</h3>
          <p>
            Hey, Everyone I am Angeliki, the founder of Fingerlickin'burger Shop.
            <br />
            Our aim is to create the burger that will make you finger lick!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Founder;
