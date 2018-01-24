import * as React from "react";
import * as ReactDOM from "react-dom";

import Home from "./view/Home/Home";

import 'element-theme-default';

import "./assets/css/reset.scss";
import "./assets/css/util.scss";
class Index extends React.Component<any, any>{
  render() {
    return (
      <div className="Index">
        
          <Home />
        
      </div>
    )
  }
}
ReactDOM.render(
  <Index />,
  document.getElementById('root') as HTMLElement
);