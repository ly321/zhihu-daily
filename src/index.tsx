import * as React from "react";
import * as ReactDOM from "react-dom";

import Home from "./view/Home/Home";

import "./assets/css/reset.css";
class Index extends React.Component<any,any>{
  render(){
    return(
      <div className="Index">
          <div className="cover"></div>
                <div className="app">
                   <Home/>
                </div>
                <div className="cover"></div>
      </div>
    )
  }
}
ReactDOM.render(
  <Index />,
  document.getElementById('root') as HTMLElement
);