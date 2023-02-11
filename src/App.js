import { Routes, Route } from "react-router-dom";
import "./App.css";
import HorizontalStepper from "./components/Main";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HorizontalStepper />}></Route>
        </Routes>
    </>
  );
};

export default App;

