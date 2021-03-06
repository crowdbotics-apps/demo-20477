import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList104415Navigator from '../features/ArticleList104415/navigator';
import ArticleList104414Navigator from '../features/ArticleList104414/navigator';
import ArticleList104413Navigator from '../features/ArticleList104413/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList104415: { screen: ArticleList104415Navigator },
ArticleList104414: { screen: ArticleList104414Navigator },
ArticleList104413: { screen: ArticleList104413Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
