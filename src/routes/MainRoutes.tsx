import { useRoutes } from 'react-router-dom';

import { NotFound } from '../pages/NotFound';
import { LoginUser } from '../pages/LoginUser';
import { SignUpUser } from '../pages/SignUpUser';
import { Home } from '../pages/Home';
import { RequireAuth } from '../contexts/Auth/RequireAuth';
import { SearchResult } from '../pages/SearchResult';
import { BeerInfo } from '../pages/BeerInfo';

export const MainRoutes = () => {
    return useRoutes([
        {path: '*', element: <NotFound />},
        {path: '/', element: <LoginUser />},
        {path: '/login', element: <LoginUser />},
        {path: '/signup', element: <SignUpUser />},
        {path: '/home', element: <RequireAuth><Home /></RequireAuth> },
        {path: '/home/results/:slug', element: <RequireAuth><SearchResult /></RequireAuth> },
        {path: '/beer/:id', element: <RequireAuth><BeerInfo /></RequireAuth> },
    ]);
}