import * as React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { getNewsContent } from '../../store/action/control';

import DetailHeader from '../../components/detail_header/Detail_header';

import './detail.scss'

function mapStateToProps(state: any) {
    return {
        body: state.reducerContent.body,
        image_source:state.reducerContent.image_source,
        title:state.reducerContent.title,
        image:state.reducerContent.image,
        share_url:state.reducerContent.share_url,
        images:state.reducerContent.images,
        css:state.reducerContent.css,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        init: (id:any) => dispatch(getNewsContent(id))
    }
}

class Detail extends React.Component<any, any>{
    componentDidMount() {
        this.props.init(3892357);
    }
    render() {
        return (
            <div className="detail">
                <link rel="stylesheet" href={this.props.css}/>
                <DetailHeader />
                <div className="detail_img_box" style={{backgroundImage: 'url(' + this.props.image.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p') + ')'}}>
                    <div className="detail_mask"></div>
                    <h1 className="detail_title">{this.props.title}</h1>
                    <p className="detail_image_source">{this.props.image_source}</p>
                </div>
                <div className="detail_content" dangerouslySetInnerHTML={{ __html: this.props.body }} >
                    
                </div>
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail) as any);