import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import Home from "./Home";
import Login from "./Login";
import SignUp from './SignUp';
import { AuthProvider, useAuth } from './utils/auth';
import Cookies from 'js-cookie';
import { RequireLogin } from './components/RequireLogin';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const auth = useAuth();

  React.useEffect(() => {
    const user = Cookies.get("KeySaver");
    if(user) auth.login(user)
  })
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RequireAuth> <Home /> </RequireAuth>} />
          <Route path="/login" element={<RequireLogin> <Login /> </RequireLogin>} />
          <Route path="/registration" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;