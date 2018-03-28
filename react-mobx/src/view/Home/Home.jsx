import React, { PureComponent } from 'react';
import Style from './home.css';

export default class Home extends PureComponent {
    render(){
        return (
            <div>
                <div className={Style.test}>
                    Home
                </div>
            </div>
        );
    }
}