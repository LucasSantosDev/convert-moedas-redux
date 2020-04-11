import React from "react";
import { Provider } from "react-redux";
import "bootstrap-css-only";
import "./App.css";

import Header from "./components/Header";
import Conversor from "./components/Conversor";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Conversor />
      </div>
    </Provider>
  );
}

export default App;
