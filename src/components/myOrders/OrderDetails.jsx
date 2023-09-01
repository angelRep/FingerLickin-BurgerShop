// Write all the code here
import React from "react";
import { Link, useLocation } from "react-router-dom";
import menus from "../home/MenuDetails";

const OrderDetails = (props) => {
    const location = useLocation();
    const propsData = location.state;

    if (!propsData) {
        return (
            <section className="orderDetails">
            <h1>Order Details</h1>
            
                <main>
                    <div>
                        <h1>Order not found!</h1>
                        <Link to="/myorders"><button>GO BACK</button></Link>
                    </div>
                </main>
            </section>
        );
    }

    return(
        <section className="orderDetails">
            <h1>Order Details</h1>
            
            <main>
                <div>
                    <h1>Shipping</h1>
                    <p><b>Address</b> {propsData.user_details.address}</p>
                </div>
                
                <div>
                    <h1>Contact</h1>
                    <p><b>Name</b> {propsData.user_details.name}</p>
                    <p><b>Phone</b> {propsData.user_details.phone}</p>
                </div>

                <div>
                    <h1>Status</h1>
                    <p><b>Order Status</b> {propsData.stat}</p>
                    <p><b>Placed At</b> {propsData.date}</p>
                    <p><b>Delivered At</b> {propsData.stat === "Completed" ? propsData.date : "---"}</p>
                </div>

                <div>
                    <h1>Payment</h1>
                    <p><b>Payment Method</b> {propsData.pay_type}</p>
                    <p><b>Payment Reference</b> #{propsData.id}</p>
                    <p><b>Paid At</b> {(propsData.stat === "Completed" || propsData.pay_type === "CARD") ? propsData.date : "---"}</p>
                </div>

                <div>
                    <h1>Amount</h1>
                    <p><b>Items Total</b>{propsData.quantity}</p>
                    <p><b>Shipping Charges</b>€{2.25}</p>
                    <p><b>Tax</b>€{(propsData.amount * 0.19).toFixed(2)}</p>
                    <p><b>Total Amount</b>€{(propsData.amount + 2.25).toFixed(2)}</p>
                </div>

                <article>
                    <h1>Ordered Items</h1>

                    {(propsData.order_details).map((bitem) => {
                        const item = menus.find((el) => el.id === bitem.id )
                        return(
                            <div>
                                <h4>{item.title}</h4>
                                <div>
                                    <span>{bitem.quantity}</span> x <span>{(item.price).toFixed(2)}</span>
                                </div>
                            </div>
                        );
                    })}

                    <div className="item-charges">
                        <h4>Shipping Charges</h4>
                        <div>
                            <span>{2.25}</span>
                        </div>
                    </div>

                    <div className="item-total">
                        <h4 style={{ fontWeight: 800, }} >Sub Total</h4>
                        
                        <div style={{ fontWeight: 800, }}>
                            €{(propsData.amount + 2.25).toFixed(2)}
                        </div>
                    </div>
                </article>
            </main>
        </section>
    );
};

export default OrderDetails;
