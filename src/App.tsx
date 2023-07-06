import React from 'react';
import './App.sass';
import 'normalize.css';
import {Header} from "./Header/Header";
import {TestClass} from './TestClass'
import {Brief} from "./Home/Brief";

function App() {
  return (
    <div className="App">
      <Header />
      <Brief />
      {/*<TestClass />*/}
    </div>
  );
}

export default App;
