import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./components/homepage";

class App extends React.Component {

  render() {
    return(
      <HomePage firstName = "Stephen" />
    );
  }
}

export default App;
