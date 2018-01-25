import * as React from 'react';

import './header.scss';
export default class Header extends React.Component<any,any>{
    render(){
        return(
            <div className="header">
                <div className="headerbox">
                    <i className="menu iconfont icon-menu"/>
                    <span className="title">首页</span>
                    <span>
                        <i className="iconfont icon-alert"></i>
                        <i className="iconfont icon-more"></i>
                    </span>
                </div>
            </div>
        )
    }
}