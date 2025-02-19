import { Routes, Route } from "react-router-dom";
import Index from "./page/Index";
import Game_comment from "./page/Game_comment";

function App() {
  return (
    <>
      <div className="APP">
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/Game_comment" element={<Game_comment />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
