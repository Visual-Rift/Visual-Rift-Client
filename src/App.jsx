import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SingnUp from "./components/SignUp/SingnUp";
import SingnIn from "./components/SignUp/SignIn";
import Logger from "./components/Logger/Logger";

function App() {
  return (
    <div className="mainDiv">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <SingnUp/>
      <SingnIn/> */}
      {/* <Logger/> */}
    </div>
  );
}
export default App;
