import * as React from 'react';

import Header from '../../components/header/Header';
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