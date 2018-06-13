import React, { Component } from 'react';
import Image from "./components/Image"

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h2>The Memory Game Where You Click on Stuff and it Moves Around!</h2>

        </header>
        <div id="imageContainer">
          <Image/>
        </div>
      </div>
    );
  }
}

export default App;
