import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import Shop from "./pages/shop";
import { Provider } from 'react-redux';
import store from './components/redux/store/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login></Login>} />
        <Route exact path="/signup" element={<SignUp></SignUp>} />
        <Route exact path="/home" element={<Home></Home>} /> 
<<<<<<< HEAD
<<<<<<< HEAD
        <Route exact path="/profile" element={<Profile/>} /> 
=======
        <Route exact path="/updateProfile" element={<Profile/>} /> 
>>>>>>> e24c0734d2fef36b5df9deca226fd20380f2d00a
=======
        <Route exact path="/profile" element={<Profile/>} /> 
>>>>>>> fbdd000d7b2aefe5d6f794eab617c0a5dc30eabf
        <Route exact path="/shop" element={<Shop/>} /> 
        <Route exact path="/resetPassword/:token" element={<ResetPassword></ResetPassword>} />
      </Routes>
    </Router>
    </Provider>

  );
}

export default App;
