import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Component1 } from "./Component1";
import { Component2 } from "./Component2";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/task1" element={<Component1/>}/>
      <Route path="/task2" element={<Component2/>}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
