import * as React from 'react';
import { connect } from 'react-redux';

import { getThemeContent } from '../../store/action/control';
import { imgFilter } from '../../service/filter';

import './list_content.scss'

function mapStateToProps(state:any){
  return{
    stories:state.reducerTheme.stories,
  }
}
function mapDispatchToProps(dispatch:any){
  return{
    init:(id:any)=>dispatch(getThemeContent(id))
  }
}

class  ListContent  extends React.Component<any,any>{
  componentDidMount(){
    this.props.init(location.hash.slice(8));
  }
  componentDidUpdate(){
    this.props.init(location.hash.slice(8));
  }
  constructor(props:any){
    super(props);
  }

  render(){
    return(
        <div className="list_content">
            {
              this.props.stories.map((item: any, index: any) => {
                return (
                    <a className="list_content_item" key={index}>
                        <p>{item.title}</p>
                        {imgHandle(item)}
                    </a>
                )
            })
            }
        </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListContent);

function imgHandle(item:any){
  if(item.images&&item.images.length>0) 
    return <img src={item.images[0]||imgFilter(item.images[0])}/>
}