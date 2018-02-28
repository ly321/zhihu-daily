import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { getThemes, sidebarActive } from '../../store/action/control';

import './list_header.scss';

function mapStateToProps(state: any) {
    return {
        sidebarList: state.reducerSidebar.sidebarList,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        init: () => dispatch(getThemes()),
        menuClick: () => dispatch(sidebarActive()),
    }
}
class ListHeader extends React.Component<any,any> {
    componentDidMount() {  
        this.props.init();
    }
    constructor(props: any) {
        super(props);
    }
    handleClick = () => {
        this.props.menuClick();
    }
    render() {
        return (
            <div className="listHeader">
                <span className="icon" onClick={this.handleClick}>
                    <i className="menu iconfont icon-menu" />
                </span>
                <span className="title">
                    { 
                      filterTitle(location.hash.slice(8),this.props.sidebarList)
                    }
                </span>
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListHeader) as any);

function filterTitle(title:string,arr:any[]=[]){
    var titleArr= arr.filter((data:any)=>{        
      return data.id == title;
    });
    if(titleArr.length>0){
        return titleArr[0].name;
    }
}