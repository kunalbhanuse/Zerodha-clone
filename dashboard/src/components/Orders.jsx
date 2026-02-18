import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [allOrder, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  return (
    <>
      {/* 1. Added curly braces for dynamic length */}
      <h3 className="title">Orders ({allOrder.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>LTP</th>
            </tr>
          </thead>
          <tbody>
            {allOrder.map((stock, index) => {
              return (
                <tr key={index}>
                  <td>{stock.mode}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>
                    <button
                      class="edit-btn "
                      type="submit"
                      style={{
                        color: "#fff",
                        background: "blue",
                        margin: "none",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="delete-btn"
                      style={{
                        color: "#fff",
                        background: "red",
                        margin: "10px",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Show a message if there are no orders */}
      {allOrder.length === 0 && (
        <div className="no-orders">
          <p>You haven't placed any orders today.</p>
        </div>
      )}
    </>
  );
};

export default Orders;
