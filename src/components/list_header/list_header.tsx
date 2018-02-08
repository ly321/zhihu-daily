import * as React from 'react';
import { connect } from 'react-redux';

import { sidebarActive } from '../../store/action/control';

import './list_header.scss';

function mapDispatchToProps(dispatch: any) {
    return {
        menuClick: () => dispatch(sidebarActive()),
    }
}
class ListHeader extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }
    handleClick = () => {
        this.props.menuClick();
    }
    render() {
        return (
            <div className="listHeader">
                <a href="#" onClick={this.handleClick}>
                    <i className="menu iconfont icon-menu" />
                </a>
                <span className="title">首页</span>
            </div>
        )
    }
}
export default connect(null, mapDispatchToProps)(ListHeader);