import * as React from 'react';
import { connect } from 'react-redux';
import {Link, withRouter } from 'react-router-dom';

import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import StoryList from '../../components/story_list/Story_list';
import Sidebar from '../../components/sidebar/Sidebar';

import "./home.scss";

function mapStateToProps(state:any){
    return{
        // top_stories:state.reducerStory.top_stories
    }
}

function mapDispatchToProps(dispatch:any){
    return{
        // init:()=>dispatch(getStories()),
    }
}
 
 class Home extends React.Component<any, any>{
    render() {
        return (
            <div className="home">
                <Header />
                <Sidebar />
                <Banner />
                <StoryList />
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home) as any);