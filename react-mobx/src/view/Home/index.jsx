import React, { PureComponent } from 'react';
import cssModules from 'react-css-modules';
import Style from './Home.css';
import Img from '../../img/timg.png';


@cssModules(Style)
export default class Home extends PureComponent {
    render() {
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
