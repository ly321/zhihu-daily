import * as React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'element-react';

import { getStories } from '../../store/action/control';

import './banner.scss';

function mapStateToProps(state:any){
    return{
        stories:state.reducerHome.stories,
        top_stories:state.reducerHome.top_stories
    }
}

function mapDispatchToProps(dispatch:any){
    return{
        init:()=>dispatch(getStories()),
    }
}

class Banner extends React.Component<any, any>{
    arr:string[];

    componentDidMount(){
        this.props.init();
    }
    componentDidUpdate(){
        this.props.init();
    }
    constructor(props:any){
        super(props);
        this.arr=[
            "https://images.weserv.nl/?url=pic1.zhimg.com/v2-e1b144eed11984e7177a41791c02053c.jpg",
            "https://images.weserv.nl/?url=pic1.zhimg.com/v2-2a12dba3ef7fb4b38ac7ca7b33eb20c8.jpg",
            "https://images.weserv.nl/?url=pic3.zhimg.com/v2-efad27d808d64b32d6f6f73069f85906.jpg"
        ]
        
    }
    
    render() {
        return (
            <div className="banner">
                  <Carousel height="8.133rem">
                  {
                    this.arr.map((item, index) => {
                      return (
                        <Carousel.Item key={index}>
                          <h3>11111</h3>
                          <img src={item} />
                        </Carousel.Item>
                      )
                    })
                  }
                </Carousel>
                <p>{this.props.stories}</p>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Banner);