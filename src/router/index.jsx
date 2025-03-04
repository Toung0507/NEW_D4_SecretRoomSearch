import { createHashRouter } from "react-router-dom";
import Base from "../page/Base";
import Game_comment from "../page/Game_comment";
import Game_search from "../page/Game_search";
import About_us from "../page/About_us";
import TeamBuy from "../page/Teambuy";

// 利用 createHashRouter 定義路由配置
const Router = createHashRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        path: "/Game_comment",
        element: <Game_comment />,
      },
      {
        path: "/Game_search",
        element: <Game_search />,
      },
      {
        path: "/About_us",
        element: <About_us />,
      },
      {
        path: "/TeamBuy",
        element: <TeamBuy />,
      },
    ],
  },
]);

export default Router;
