/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppStackNavigator from './src/AppStackNavigator.js'
import Splash from './src/Splash'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppStackNavigator);
