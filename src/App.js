import React, { Component } from "react";
import { Provider } from "react-redux";

import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

import store from "./store";

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Video />
          <Sidebar />
        </Provider>
      </div>
    );
  }
}
