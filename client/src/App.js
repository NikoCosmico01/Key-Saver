import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentDidMount() {
    this.callAPI();
}

  render() {
    return (
      <div className="App">
      <p className="App-intro">;{this.state.apiResponse}</p> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    );
  }
}

export default App;