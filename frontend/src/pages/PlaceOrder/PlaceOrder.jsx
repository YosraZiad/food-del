import { StoreContext } from "../../Context/StoreContext";
import React, { useContext } from "react";
import "./PlaceOrder.css";
const PlaceOrder = () => {
  const { getTotalCartAmonut} = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title"> Delivery Information </p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detils">
              <p>Subtotal</p>
              <p>${getTotalCartAmonut()}</p>
            </div>
            <div className="cart-total-detils">
            <p>Delivery Free</p>
            <p>${getTotalCartAmonut()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-detils">
              <b>Total</b>
              <b>${getTotalCartAmonut()===0?0:getTotalCartAmonut()+2}</b>
            </div>
          
          </div>
          <button  >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
