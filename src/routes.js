import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';
import Menu from '~/pages/Menu';
import Intro from '~/pages/Intro';
import Profile from '~/pages/Profile';

const Routes = createAppContainer(createStackNavigator(
    
    { 
        Intro: {screen: Intro, navigationOptions: {header: null}},
        Main: {screen: Main, navigationOptions: { header: null }},
        Menu: {screen: Menu, navigationOptions: { header: null }},
        Profile: {screen: Profile, navigationOptions: { header: null }}
    } 
    
    , 
    
    { initialRouteName: "Intro" }

));

export default Routes;
