import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/home';

const Routes = createBrowserRouter([
    {path:'/city-app', element: <Home/>}
]);

export default Routes;
