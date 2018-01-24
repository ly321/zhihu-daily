import * as React from 'react';

import Header from '../../components/Header/Header';
import "./home.scss";

export default class Home extends React.Component<any,any>{
    render(){
        return(
            <div className="home">
                 <Header/>
            </div>
        )
    }
}