import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// const userDetail = [];
const Users = () => {
  return (
    <div>
      <div className=" w-full flex flex-row border-2 p-2 rounded-lg">
        <div className="flex flex-row justify-between w-full">
          <div className="flex  justify-start items-center">
            {" "}
            <AccountCircleIcon />
          </div>
          <div className="flex text-xl  justify-start items-center">
            Dhirendra Singh
          </div>
          <div className="flex text-md  justify-start items-center">
            Software Engineer
          </div>
          <div></div>
          <div>
            <button
              type="button"
              className="p-1 px-3 rounded-lg text-white  font-semibold bg-black  m-2"
            >
              Add friend +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
