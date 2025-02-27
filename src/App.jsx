import { Routes, Route } from "react-router-dom";
import Index from "./page/Index";
import Game_comment from "./page/Game_comment";
import Game_search from "./page/Game_search";
import About_us from "./page/About_us";

function App() {
  return (
    <>
      <div className="APP">
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/Game_comment" element={<Game_comment />}></Route>
          <Route path="/Game_search" element={<Game_search />}></Route>
          <Route path="/About_us" element={<About_us />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
