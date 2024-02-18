import React, { useState, useEffect } from "react";
// import { Typography } from '@mui/material';
// // project import
// import MainCard from 'components/MainCard';

const Myprofile = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    occupation: "Services", // Default value
    annualIncome: "",
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <>
      <div>
        <table className="border-collapse border w-full border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 p-2">First Name</th>
              <th className="border border-gray-200 p-2">Last Name</th>
              <th className="border border-gray-200 p-2">Username</th>
              <th className="border border-gray-200 p-2">Email</th>
              <th className="border border-gray-200 p-2">Occupation</th>
              <th className="border border-gray-200 p-2">Annual Income</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 p-2">
                {userData.firstName}
              </td>
              <td className="border border-gray-200 p-2">
                {userData.lastName}
              </td>
              <td className="border border-gray-200 p-2">
                {userData.username}
              </td>
              <td className="border border-gray-200 p-2">{userData.email}</td>
              <td className="border border-gray-200 p-2">
                {userData.occupation}
              </td>
              <td className="border border-gray-200 p-2">
                {userData.annualIncome}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="my-8 flex flex-row w-full">
          <div className="flex flex-col w-full ">
            <div className="text-lg pb-2   text-black  font-medium">Goals</div>
            <div>
              <div className="flex flex-col w-full  border border-black rounded-lg ">
                <div className="flex flex-row w-full border-b border-black font-semibold ">
                  <div className="flex  w-1/2 p-2 border-r border-black  ">
                    Goal
                  </div>
                  <div className="flex p-2 w-1/2 ">Amount</div>
                </div>
                {/* {goals.length > 0 &&
                  goals.map((goal, index) => (
                    <div className="flex flex-row w-full" key={index}>
                      <div className="flex  w-1/2 p-2 border-r border-black">
                        {goal.goal}
                      </div>
                      <div className="flex p-2 w-1/2 ">{goal.amount}</div>
                    </div>
                  ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myprofile;
