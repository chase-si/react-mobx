import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import io from 'socket.io-client';

import style from './index.css';

@observer
@cssModules(style)
export default class Chat extends Component {
    componentDidMount() {
        window.socket = io();
        socket.on('show message', msg => this.msgList.push(msg));
    }

    @observable msg = '';
    @observable msgList = [];

    handleChangeInput = e => {
        this.msg = e.target.value;
    };

    handleInputKeyDown = e => {
        if (e.keyCode === 13) {
            this.handleSentMsg();
        }
    }

    handleSentMsg = () => {
        socket.emit('sent message', this.msg);
        this.msg = '';
    };

    render() {
        return (
            <div>
                <h1>Chatting Room</h1>
                <div styleName="context-board">
                    <ul>
                        <li>
                            here's your message:
                        </li>
                        {
                            this.msgList.map(item => <li key={item}> {item}</li>)
                        }
                    </ul>
                </div>
                <div styleName="form">
                    <input
                        styleName="input"
                        onChange={this.handleChangeInput}
                        onKeyDown={this.handleInputKeyDown}
                        value={this.msg}
                    />
                    <button styleName="button" onClick={this.handleSentMsg}>
                        Send Message
                    </button>
                </div>
            </div>
        );
    }
}
