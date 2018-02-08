import * as React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'element-react';

import { sidebarActive } from '../../store/action/control';

import ListHeader from '../../components/list_header/list_header';
function mapStateToProps(state:any){
  return{
      // sidebarList: state.reducerSidebar.sidebarList,
  }
}
function mapDispatchToProps(dispatch: any) {
  return {
      menuClick: () => dispatch(sidebarActive()),
  }
}


class ListTheme extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
  }
  handleClick = () => {
    this.props.menuClick();
  }
  render() {
    return (
        <div className="list_view">
            <ListHeader/>
            
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTheme);