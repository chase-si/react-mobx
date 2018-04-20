import React, { PureComponent } from 'react';
import cssModules from 'react-css-modules';
import style from './Home.css';

import dogImg from '../../img/timg.png';

@cssModules(style)
export default class Home extends PureComponent {
    render() {
        return (
            <div>
                <div styleName="test">
                    Home
                </div>
                <div>
                    <img src={dogImg} alt="" />
                </div>
            </div>
        );
    }
}
