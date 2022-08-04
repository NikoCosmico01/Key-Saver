import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import Home from "./Home";
import Login from "./Login";
import SignUp from './SignUp';
import { AuthProvider, useAuth } from './utils/auth';
import Cookies from 'js-cookie';
import { RequireLogin } from './components/RequireLogin';


function App() {
  const auth = useAuth();

  React.useEffect(() => {
    const user = Cookies.get("KeySaver");
    console.log(auth)
  })
    return (
      <AuthProvider>
        <Routes>
          <Route path="/" element={<RequireAuth> <Home /> </RequireAuth>} />
          <Route path="/login" element={<RequireLogin> <Login /> </RequireLogin>} />
          <Route path="/registration" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    );
}

export default App;