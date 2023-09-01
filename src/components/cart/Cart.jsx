import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/menu-assets/burger1.png";
import burger2 from "../../assets/menu-assets/burger2.png";
import burger3 from "../../assets/menu-assets/burger3.png";
// import burger3 here
import menus from "../home/MenuDetails";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <div className="image-holder">
        <img src={img} alt="Item" />
      </div>
      <h4>{title}</h4>
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};

  const decrement = (item) => {};

  return (
    <section className="cart">
      <h1>Shopping Card</h1>
      <main>
        <div className="item-bag">
          {menus.map((item) => (
            <CartItem
            key={item.id}
            title={item.title}
            img={item.burgerSrc}
            value={0}
            increment={() => increment(item.id)}
            decrement={() => decrement(item.id)}
          />
          ))}
        </div>
        {/* <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        // Add the function for decrementing the order by 1 
       
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        // Add the function for decrementing the order by 2
       
        />

        {/* Fill up the code for Cheese Burger similarly */}
        {/* <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
       
        /> */}

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>€{(50.58).toFixed(2)}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>€{(50.58 * 0.18).toFixed(2)}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>€{(2.25).toFixed(2)}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>€{(50.58 + 2.25).toFixed(2)}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
