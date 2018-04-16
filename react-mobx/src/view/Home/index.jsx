import React, { PureComponent } from 'react';
import cssModules from 'react-css-modules';
import Style from './home.css';
import Img from '../../img/timg.png';

import { getConfiguration } from '../../api/main';

@cssModules(Style)
export default class Home extends PureComponent {
    render() {
        getConfiguration();
        return (
            <div>
                <div styleName="test">
                    Home
                </div>
                <div>
                    <img src={Img} alt="" />
                </div>
            </div>
        );
    }
}
