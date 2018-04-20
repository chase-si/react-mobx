import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home/index';
import Chat from './Chat/index';

export default class Root extends PureComponent {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/home">首页</Link></li>
                        <li><Link to="/chat">Let's chat</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route path="/chat" component={Chat} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
