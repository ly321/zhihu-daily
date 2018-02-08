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

class  ListView  extends React.Component<any,any>{
  render(){
    return(
      <div className="list_view">
            <ListHeader/>
            <div className="banner">
            
            </div>
            
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);