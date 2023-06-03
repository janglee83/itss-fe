import { lazy } from 'react';
import Loadable from '../components/Loadable';

const Sample = Loadable(lazy(() => import('../views/SampleView')));

const MainRoutes = [{ path: '/', component: Sample }];

export default MainRoutes
