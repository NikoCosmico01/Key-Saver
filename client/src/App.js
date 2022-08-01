import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import SignUp from './SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<SignUp />} />
      </Routes>
    </div>
    );
  }
}

export default App;