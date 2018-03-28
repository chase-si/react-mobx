import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from './view/Root.jsx';

render(
    <BrowserRouter>
        <Route component={Root} />
    </BrowserRouter>,
    document.getElementById('app')
);
