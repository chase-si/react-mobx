import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from './view/Root.jsx';

const ele = document.createElement('div');
document.body.appendChild(ele);

render(
    <BrowserRouter>
        <Route component={Root} />
    </BrowserRouter>,
    ele
);
