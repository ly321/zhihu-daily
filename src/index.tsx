import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import 'element-theme-default';

import RouterConfig  from './router/router';

import store from './store/store';

import "./assets/css/reset.scss";
import "./assets/css/util.scss";

class Index extends React.Component<any, any>{
  render() {
    return (
      <Provider  store={store}>
        <RouterConfig ></RouterConfig>
      </Provider>
    )
  }
}
ReactDOM.render(
  <Index />,
  document.getElementById('root') as HTMLElement
);