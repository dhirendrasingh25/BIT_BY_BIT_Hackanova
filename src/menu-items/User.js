// assets
import { LoginOutlined, ProfileOutlined,PlusCircleOutlined,MoneyCollectOutlined,EditOutlined,UserOutlined } from "@ant-design/icons";

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  PlusCircleOutlined,
  MoneyCollectOutlined,
  EditOutlined,
  UserOutlined,
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const User = {
  id: "User Management",
  title: "User Management",
  type: "group",
  children: [
    {
      id: "profile",
      title: "View Profile",
      type: "item",
      url: "/profile",
      icon: icons.UserOutlined,
      target: true,
    },
    {
      id: "edit-profile",
      title: "Edit Profile",
      type: "item",
      url: "/edit-profile",
      icon: icons.EditOutlined,
      target: true,
    },

    {
      id: "Users",
      title: "User  List",
      type: "item",
      url: "/users",
      icon: icons.ProfileOutlined,
      target: true,
    },
    {
      id: "AddTransaction",
      title: "Add Transaction",
      type: "item",
      url: "/add-transaction",
      icon: icons.PlusCircleOutlined,
      target: true,
    },
    // {
    //   id: "calander",
    //   title: "Calander",
    //   type: "item",
    //   url: "/calander",
    //   icon: icons.ProfileOutlined,
    //   target: true,
    // },
    {
      id: "budget",
      title: "Budget",
      type: "item",
      url: "/budget",
      icon: icons.MoneyCollectOutlined,
      target: true,
    },
  ],
};

export default User;
