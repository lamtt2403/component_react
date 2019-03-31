import Login from './pokemon_login'
import Splash from './Splash'
import FrameLayout from './FrameLayout'
import {createStackNavigator, createAppContainer} from 'react-navigation'

const AppNavigator = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    }, 
    FrameLayout: {
        screen: FrameLayout
    }
}, {
    //settings
    initialRouteName: 'Splash'
})

export default createAppContainer(AppNavigator)