import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import  Home from '../view/home/Home';
import ListTheme from '../view/list_theme/List_theme';

export default class RouterConfig extends React.Component<any, any>{
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/theme/:id" component={ListTheme}/> 
                </Switch>
            </Router>
        )
    }
}