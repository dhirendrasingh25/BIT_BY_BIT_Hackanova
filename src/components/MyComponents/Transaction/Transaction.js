import OrderTable from "pages/dashboard/OrdersTable";
import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { useState } from "react";

const Transaction = () => {
  const [productName, setProductName] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [status, setStatus] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);

  function generateRandomId(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    for (let i = 0; i < length; i++) {
      randomId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomId;
  }

  const addTransaction = async () => {
    const id = generateRandomId(10);
    await setDoc(doc(db, "transactions", id), {
      product_name: productName,
      status: status,
      total_quantity: totalQuantity,
      total_amount: totalAmount,
      date: Date(),
    });
    console.log("Transaction added successfully");
  };

  return (
    <div>
      <div>
        <div className="flex flex-row">
          <div className="flex flex-col w-1/2 mr-4">
            <div className="text-md py-2 pl-2 text-[#4D5464] font-medium">
              Product Name
            </div>
            <input
              id="designation"
              type="text"
              placeholder="Product Name"
              className="text-[#667085] p-2 border  rounded-md"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <div className="text-md py-2 pl-2 text-[#4D5464] font-medium">
              Total Quantity
            </div>
            <input
              placeholder="Total Quantity"
              className="text-[#667085] p-2 border rounded-md"
              value={totalQuantity}
              onChange={(e) => setTotalQuantity(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <div className="flex flex-col w-1/2 mr-4">
            <div className="text-md py-2 pl-2 text-[#4D5464] font-medium">
              Status
            </div>
            <input
              id="designation"
              type="text"
              placeholder="Status"
              className="text-[#667085] p-2 border  rounded-md"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="text-md py-2 pl-2 text-[#4D5464] font-medium">
              Total Amount
            </div>
            <input
              placeholder="Total Amount"
              className="text-[#667085] p-2 border rounded-md"
              value={totalAmount}
              onChange={(e) => setTotalAmount(e.target.value)}
            ></input>
          </div>
        </div>
        <div className=" flex justify-end">
          <button
            type="button"
            className="p-2 px-3 rounded-lg text-white  font-semibold bg-black  mt-3"
            onClick={addTransaction}
          >
            Add Transaction +
          </button>
        </div>
      </div>
      <div className="text-lg font-medium py-2">Recent Transaction</div>
      <div className="border rounded-lg border-black">
        <OrderTable />
      </div>
    </div>
  );
};

export default Transaction;
