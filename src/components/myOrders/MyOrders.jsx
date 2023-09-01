import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  // const arr = [1, 2, 3, 4];
  const orderArray = [
    {
      id: "tYeg5Jfv890w",
      stat: "Processing",
      date: "2023-08-20",
      quantity: 6,
      amount: 28.59,
      pay_type: "COD",
      user_details: {
        name: "Aggelos",
        phone: "96999699",
        address: "Agiou Andreou 17, Limassol, Cyprus",
      },
      order_details: [
        {id: 1, quantity: 2},
        {id: 2, quantity: 1},
        {id: 5, quantity: 1},
        {id: 8, quantity: 2},
      ],
    },
    {
      id: "uYeI8ofT86pw",
      stat: "On the way",
      date: "2023-08-10",
      quantity: 11,
      amount: 66.19,
      pay_type: "CARD",
      user_details: {
        name: "Aggelos",
        phone: "96999699",
        address: "Agiou Andreou 17, Limassol, Cyprus",
      },
      order_details: [
        {id: 1, quantity: 2},
        {id: 2, quantity: 1},
        {id: 5, quantity: 1},
        {id: 7, quantity: 1},
        {id: 8, quantity: 2},
        {id: 9, quantity: 1},
        {id: 11, quantity: 1},
        {id: 12, quantity: 2},
      ],
    },
    {
      id: "uPty5Jfv290r",
      stat: "Completed",
      date: "2023-07-18",
      quantity: 30,
      amount: 165.38,
      pay_type: "COD",
      user_details: {
        name: "Aggelos",
        phone: "96999699",
        address: "Kolokontroni 37, Limassol, Cyprus",
      },
      order_details: [
        {id: 1, quantity: 2},
        {id: 2, quantity: 2},
        {id: 5, quantity: 2},
        {id: 6, quantity: 3},
        {id: 7, quantity: 2},
        {id: 8, quantity: 2},
        {id: 9, quantity: 10},
        {id: 10, quantity: 5},
        {id: 12, quantity: 2},
      ],
    },
    {
      id: "hDeS5Java30b",
      stat: "Completed",
      date: "2023-06-28",
      quantity: 2,
      amount: 12.49,
      pay_type: "CARD",
      user_details: {
        name: "Aggelos",
        phone: "96999699",
        address: "Agiou Andreou 17, Limassol, Cyprus",
      },
      order_details: [
        {id: 5, quantity: 1},
        {id: 8, quantity: 1},
      ],
    }
  ]

  return (
    <section className="tableClass">

      <h1>My Orders</h1>

      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orderArray.map((order) => (
              <tr key={order.id}>
                <th>{order.id}</th>
                <th>{order.stat}</th>
                <th>{order.quantity}</th>
                <th>{order.amount}</th>
                <th>{order.pay_type}</th>
                <th>
                  <Link to={`/order/${order.id}`} state={orderArray.find((item)=> item.id === order.id)}>
                    <AiOutlineEye />
                  </Link>
                </th>
              </tr>
            ))}
           
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
