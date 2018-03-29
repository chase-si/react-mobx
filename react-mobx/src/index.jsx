import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from './view/Root';

render(
    <BrowserRouter>
        <Route path="/" component={Root} />
    </BrowserRouter>,
    document.getElementById('app')
);
