import React from "react";
// import { Typography } from '@mui/material';
import { useState, useEffect } from "react";
// // project import
// import MainCard from 'components/MainCard';

const Profile = () => {
  const [goals, setGoals] = useState([
    {
      goal: "",
      amount: "",
    },
  ]);
  const [newGoal, setNewGoal] = useState({
    goal: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewGoal((prevGoal) => ({ ...prevGoal, [id]: value }));
  };

  const handleAddGoal = () => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    setNewGoal({
      goal: "",
      amount: "",
    });
  };

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    occupation: "Services",
    annualIncome: "",
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
  const saveUserData = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  return (
    <form>
      <div className="flex  flex-row">
        <div className="flex flex-col w-1/2 mr-4">
          <div className="text-md py-2 pl-2 text-[#4D5464] font-medium">
            First Name
          </div>
          <input
            id="designation"
            type="text"
            placeholder="First Name"
            className="text-[#667085] p-2 border  rounded-md"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="text-md py-2 pl-2 text-[#4D5464] font-medium">
            Last Name
          </div>
          <input
            placeholder="Last Name"
            className="text-[#667085] p-2 border rounded-md"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 mr-4">
          <div className="text-md py-2 pl-2 text-[#4D5464] font-medium">
            UserName
          </div>
          <input
            id="designation"
            type="text"
            placeholder="username"
            className="text-[#667085] p-2 border  rounded-md"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <div className="text-md py-2 pl-2 text-[#4D5464] font-medium">
            Email Id
          </div>
          <input
            placeholder="Email"
            className="text-[#667085] p-2 border rounded-md"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 mr-4">
          <div className="text-md py-2 pl-2 text-[#4D5464] font-medium">
            Occupation
          </div>
          <select
            value={userData.occupation}
            onChange={handleChange}
            className="p-2 rounded-lg"
          >
            <option>Service</option>
            <option>Business</option>
          </select>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="text-md py-2 pl-2 text-[#4D5464] font-medium">
            Annual Income
          </div>
          <select
            value={userData.annualIncome}
            onChange={handleChange}
            className="p-2 rounded-lg"
          >
            <option>0 - 3 Lakhs</option>
            <option>3 - 7.5 Lakhs</option>
            <option>10 - 12.5 Lakhs</option>
            <option>12.5 - 15 Lakhs</option>
            <option>Above 15 Lakhs</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-black rounded-xl text-white p-2 px-4 mt-4"
          type="button"
          onClick={saveUserData}
        >
          Save User Data
        </button>
      </div>

      <div>
        <div className="py-2 pl-1 text-xl">Add Goals</div>

        <div className="flex flex-row">
          <div className="flex flex-col w-1/2 mr-4">
            <div className="text-md py-2 pl-2 text-[#4D5464] font-medium">
              Goal
            </div>
            <input
              id="goal"
              type="text"
              placeholder="Add Goal"
              value={newGoal.goal}
              onChange={handleInputChange}
              className="text-[#667085] p-2 border  rounded-md"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <div className="text-md py-2 pl-2 text-[#4D5464] font-medium">
              Amount
            </div>
            <input
              id="amount"
              type="text"
              placeholder="Add Amount"
              value={newGoal.amount}
              onChange={handleInputChange}
              className="text-[#667085] p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-row justify-end">
          <div>
            <button
              type="button"
              onClick={handleAddGoal}
              className="p-2 px-3 rounded-lg text-white  font-semibold bg-black  m-2"
            >
              Add +
            </button>
          </div>
        </div>

        <div className="flex flex-row w-full">
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
                {goals.length > 0 &&
                  goals.map((goal, index) => (
                    <div className="flex flex-row w-full" key={index}>
                      <div className="flex  w-1/2 p-2 border-r border-black">
                        {goal.goal}
                      </div>
                      <div className="flex p-2 w-1/2 ">{goal.amount}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Profile;
