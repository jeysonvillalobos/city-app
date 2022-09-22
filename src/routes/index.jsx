import React from 'react';
import { createBrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/home';

const Routes = createBrowserRouter([
    {path:'/', element: <Home/>}
]);

export default Routes;
