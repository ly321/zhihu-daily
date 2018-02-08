import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import  Home from '../view/home/Home';

export default class RouterConfig extends React.Component<any, any>{
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Router>
        )
    }
}