import React, { PureComponent } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home/Home.jsx';
import Page from './Page/Page.jsx';

export default class Root extends PureComponent{
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/page">Page1</Link></li>
                </ul>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/page" component={Page}/>
                </Switch>
            </div>
        );
    }
}