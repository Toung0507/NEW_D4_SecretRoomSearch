import { createHashRouter } from "react-router-dom";
import Base from "../page/Base";
import Game_comment from "../page/Game_comment";
import Game_search from "../page/Game_search";
import About_us from "../page/About_us";
import Game_content from "../page/Game_content";
import Index from "../page/Index";
import TeamBuy from "../page/Teambuy";
import Login from "../page/Login";
import UserProfile from "../page/UserProfile";
import TeamBuyComment from "../page/TeamBuyComment";
import AdminLayout from "../page/admin/AdminLayout";
import AdminIndex from "../page/admin/AdminIndex";

const Router = createHashRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Game_comment/:gameID",
        element: <Game_comment />,
      },
      {
        path: "/Game_search",
        element: <Game_search />,
      },
      {
        path: "/Game_content/:gameID",
        element: <Game_content />,
      },
      {
        path: "/TeamBuy",
        element: <TeamBuy />,
      },
      {
        path: "/About_us",
        element: <About_us />,
      },
      {
        path: "/User_profile/:user_id",
        element: <UserProfile />,
      },
      {
        path: "/TeamBuyComment",
        element: <TeamBuyComment />,
      },
      {
        path: "/Admin",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <AdminIndex />,
          },
        ],
      },
    ],
  },
]);

export default Router;
