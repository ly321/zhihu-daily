import * as React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'element-react';
import { withRouter } from 'react-router-dom';


import { getStories } from '../../store/action/control';
import { imgFilter } from '../../service/filter';

import './banner.scss';

function mapStateToProps(state:any){
    return{
        top_stories:state.reducerStory.top_stories
    }
}

function mapDispatchToProps(dispatch:any){
    return{
        init:()=>dispatch(getStories()),
    }
}

class Banner extends React.Component<any, any>{

    componentDidMount(){
        
        this.props.init();
    }
    componentDidUpdate(){
        // this.props.init();
    }
    constructor(props:any){
        super(props);
    }
    
    render() {
        return (
            <div className="banner">
                  <Carousel height="8.133rem">
                  {
                    this.props.top_stories.map((item:any, index:any) => {
                      return (
                        <Carousel.Item key={index}>
                          <h3><span>{item.title}</span></h3>
                          <img src={item.image||imgFilter(item.image)} />
                        </Carousel.Item>
                      )
                    })
                  }
                </Carousel>
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Banner)as any );