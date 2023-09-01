import React from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <section className="shipping">

      <h1>Shipping Details</h1>
      
      <main>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House Number" />
          </div>
          
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>

          <div>
              {/* Compelte the code for the COUNTRY DROPDOWN*/}
            <label>Country</label>
            <select>
              <option value="cyprus">Cyprus</option>
              {/* {Country && Country.getAllCountries().map((i) => (
              <option value="{i.isoCode}" key="{i.isoCode}">
                {i.name}
              </option>
              ))} */}
            </select>
          </div>

          <div>
            <label>State</label>
            <select>
              <option value="">State</option>
              {State && State.getStatesOfCountry("CY").map((i) => (
              <option value="{i.isoCode}" key="{i.isoCode}">
                {i.name}
              </option>
              ))}
            </select>
          </div>

          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div>
            <label>Phone No.</label>
            <input type="number" placeholder="Enter Phone Number" />
          </div>   
          
          <Popup trigger=
                {<Link className="link" to="/myorders">Confirm Order</Link>}
                position="right center">
                <div style={{color:"red",position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Order Placed</div>
               
            </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
