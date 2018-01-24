import * as React from 'react';

import './header.scss';
export default class Header extends React.Component<any,any>{
    render(){
        return(
            <div className="header">
                <i className="menu"/>
                <span>热门消息</span>
            </div>
        )
    }
}