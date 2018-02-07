import * as React from 'react';
import { connect } from 'react-redux';

import { getStories } from '../../store/action/control';

import './story_list.scss';

function mapStateToProps(state: any) {
    return {
        stories: state.reducerHome.stories,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        init: () => dispatch(getStories()),
    }
}

class StoryList extends React.Component<any, any>{
    componentDidMount() {
        this.props.init();
    }
    componentDidUpdate() {
        this.props.init();
    }
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="story_list">
                <h2 className="story_list_title">今日新闻</h2>
                {
                    this.props.stories.map((item: any, index: any) => {
                        return (
                            <a className="story_list_item" key={index}>
                                <p>{item.title}</p>
                                <img src={item.images[0]}/>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StoryList);