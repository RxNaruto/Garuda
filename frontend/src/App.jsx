import { Signup } from "./pages/Signup";
import { Login}  from "./pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
       
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;