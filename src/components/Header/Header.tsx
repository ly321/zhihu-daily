import * as React from 'react';
import { connect } from 'react-redux';

import { sidebarAcive } from '../../store/action/control';

import './header.scss';

function mapDispatchToProps(dispatch: any) {
    return {
        menuClick: () => dispatch(sidebarAcive()),
    }
}
class Header extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }
    handleClick=()=>{
        this.props.menuClick()
    }
    render() {
        return (
            <div className="header">
                <div className="headerbox">
                    <a href="#" onClick={this.handleClick}>
                        <i className="menu iconfont icon-menu" />
                    </a>
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
export default connect(null,mapDispatchToProps)(Header);