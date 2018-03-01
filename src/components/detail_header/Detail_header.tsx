import * as React from 'react';
import { Link } from 'react-router-dom';
import './detail_header.scss';

export default class DetailHeader extends React.Component<any, any>{
  goBack(){
    window.history.back();
  }
  render() {
    return (
      <div className="detail_header">
        <div className="header_icon" onClick={this.goBack}>
            <i className="iconfont icon-fanhui"></i>
        </div>
        <div className="header_icon">
          <i className="iconfont icon-more" ></i>
        </div>
      </div>
    )
  }
}