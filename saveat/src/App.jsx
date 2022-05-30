import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import Shop from "./pages/shop";
import Test from './pages/Test'
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
        <Route exact path="/profile" element={<Profile/>} /> 
        <Route exact path="/shop" element={<Shop/>} /> 
        <Route exact path="/test" element={<Test/>} />
        <Route exact path="/resetPassword/:token" element={<ResetPassword></ResetPassword>} />
      </Routes>
    </Router>
    </Provider>

  );
}

export default App;
