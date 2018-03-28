import React, { PureComponent } from 'react';
import cssModules from 'react-css-modules';
import Style from './Home.css';

@cssModules(Style)
export default class Home extends PureComponent {
    render(){
        return (
            <div>
                <div styleName="test">
                    Home
                </div>
            </div>
        );
    }
}
