import * as React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Carousel } from 'element-react';


import { getThemes, sidebarActive } from '../../store/action/control';

import './sidebar.scss';


function mapStateToProps(state: any) {
    return {
        sidebarList: state.reducerSidebar.sidebarList,
        sidebarActive: state.reducerSidebar.sidebarActive,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        init: () => dispatch(getThemes()),
        menuClick: () => dispatch(sidebarActive()),
    }
}

class Sidebar extends React.Component<any, any> {
    componentDidMount() {
        this.props.init();
    }
    componentDidUpdate() {
        this.props.init();        
    }
    constructor(props: any) {
        super(props);
        
    }
    handleClick=()=>{
        this.props.menuClick();
    }
    render() {
        return (
            <div className="sidebar">
                <div className={this.props.sidebarActive ? "sidebar_box sidebar-show" :"sidebar_box"}>
                    <div className="sidebar_box_header">
                        <div className="user">
                            <span>
                                <img src="../src/assets/images/favicon.png" alt="" />
                            </span>
                            <p>sillyY</p>
                        </div>
                        <div className="function">
                            <div className="function-sub">
                                <i className="iconfont icon-shoucang"></i>
                                <p>我的收藏</p>
                            </div>
                            <div className="function-sub">
                                <i className="iconfont icon-msnui-download"></i>
                                <p>离线下载</p>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar_box_list">
                        <a href="#">
                            <p>
                                <i className="iconfont icon-weibiaoti1"></i>
                                首页
                        </p>
                        </a>
                        {
                            this.props.sidebarList.map((item:any,index:any)=>{
                            return (
                                <Link className="sidebarList_item" to={`/theme/${item.id}`} key={index}>
                                    <p>{item.name}</p>
                                    <span>+</span>
                                </Link>
                            )
                        })
                    }
                    </div>
                </div>
                <div className={this.props.sidebarActive?"sidebar_mask":null} onClick={this.handleClick}></div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);