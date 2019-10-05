import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';
import Menu from '~/pages/Menu';
import Intro from '~/pages/Intro';
import Profile from '~/pages/Profile';
import Category from '~/pages/Category';
import Event from '~/pages/Event';

const Tabs = createAppContainer(createStackNavigator(
    
    { 
        Intro: {screen: Intro, navigationOptions: {header: null}},
        Main: {screen: Main, navigationOptions: { header: null }},
        Menu: {screen: Menu, navigationOptions: { header: null }},
        Profile: {screen: Profile, navigationOptions: { header: null }},
        Category: {screen: Category, navigationOptions: { header: null }},
        Event: {screen: Event, navigationOptions: { header: null }},
    } 
    
    , 
    
    { initialRouteName: "Intro" }

));

export default Tabs;
