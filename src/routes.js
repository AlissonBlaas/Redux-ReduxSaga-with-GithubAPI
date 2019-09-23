
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import Repositories from './pages/Repositories';

const Routes = createAppContainer(
  createStackNavigator({
    Login,
    Repositories,
  }),
);

export default Routes;
