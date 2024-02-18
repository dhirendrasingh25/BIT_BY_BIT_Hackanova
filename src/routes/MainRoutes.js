import { lazy } from "react";

// project import
import Loadable from "components/Loadable";
import MainLayout from "layout/MainLayout";
import Profile from "components/MyComponents/Profile/Profile";
import Transaction from "components/MyComponents/Transaction/Transaction";
import Calander from "components/MyComponents/Calander/Calander";
import Users from "components/MyComponents/Profile/Users";
import Budget from "pages/budgetPredictor/Budget";
import Chatbot from "pages/chatbot/Chatbot";
import Myprofile from "components/MyComponents/Profile/Myprofile";
// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("pages/dashboard")));

// render - sample page
const SamplePage = Loadable(lazy(() => import("pages/extra-pages/SamplePage")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },

    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: "edit-profile",
      element: <Profile />,
    },
    {
      path: "profile",
      element: <Myprofile />,
    },
    {
      path: "add-transaction",
      element: <Transaction />,
    },
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "calander",
      element: <Calander />,
    },
    {
      path: "sample-page",
      element: <SamplePage />,
    },
    {
      path: "/budget",
      element: <Budget />,
    },
    {
      path: "/chatbot",
      element: <Chatbot />,
    },
  ],
};

export default MainRoutes;
