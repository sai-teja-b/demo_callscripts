import React from "react";
import { useState } from "react";

import OrdersScriptCB from "../ordersScriptCB/routineAppt";
import OrdersScriptPS from "../ordersScriptPS/ordersPS";

export default function Orders() {
  let [wb, setWb] = useState(true);
  function handleClick(e) {
    let name = e.target.textContent;
    if (name == "Cookbook Design") {
      setWb(true);
    } else {
      setWb(false);
    }
  }
  return (
    <div>
      <div className="button-collection">
        <button onClick={handleClick} className="button">
          Cookbook Design
        </button>
        <button onClick={handleClick} className="button">
          Suggested Design
        </button>
      </div>
      {wb == true ? (
        <OrdersScriptCB></OrdersScriptCB>
      ) : (
        <OrdersScriptPS></OrdersScriptPS>
      )}
    </div>
  );
}
