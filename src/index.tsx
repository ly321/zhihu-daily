import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import 'element-theme-default';

import Home from "./view/home/Home";

import store from './store/store';

import "./assets/css/reset.scss";
import "./assets/css/util.scss";

class Index extends React.Component<any, any>{
  render() {
    return (

      <Provider  store={store}>
        <Home />
      </Provider>
    )
  }
}
ReactDOM.render(
  <Index />,
  document.getElementById('root') as HTMLElement
);