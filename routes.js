import React from 'react';
import { 
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import StatusScreen from './src/screens/StatusScreen';
import Status from './src/screens/Status';
import JobsScreen from './src/screens/JobsScreen';
// Helpers
import LogoutScreen from './src/screens/Logout';

//About me
import AboutMe from './src/screens/AboutMe';

// Project Tracking
const trackListNavigator = createStackNavigator({
  TrackList: {
    screen: TrackListScreen,
    navigationOptions: {
      title: 'Lista de tus tramos'
    }
  },
  TrackDetail: {
    screen: TrackDetailScreen,
    navigationOptions: {
      title: 'Detalle del tramo'
    }
  }
}, {
  navigationOptions: {
    tabBarIcon: <Icon name="th-list" size={20} />
  }
});

const AppContainer = createBottomTabNavigator({
  TrackList: trackListNavigator,
  TrackCreate: TrackCreateScreen
})


const StatusStack = createStackNavigator({
  StatusScreen: {
    screen: StatusScreen,
    navigationOptions: {
      title: 'Pantallas de estados'
    }
  },
  Status: {
    screen: Status,
    navigationOptions: {
      title: ''
    }
  }
}, {
  initialRouteName: 'StatusScreen'
})

// Login flow navigator
const AuthNavigator = createStackNavigator({
  SignUp: {
    screen: SignUpScreen
  },
  SignIn: {
    screen: SignInScreen
  }
}, {
  initialRouteName: 'SignIn'
})

const AboutMeNavigator = createStackNavigator({
  AboutMe: {
    screen: AboutMe,
    navigationOptions: {
      title: 'Francisco Amuchástegui',
    }
  },
});

//Jobs and proyects 
const JobsNavigator = createStackNavigator({
  JobsScreen: {
    screen: JobsScreen,
    navigationOptions: {
      title: 'Trabajos y Proyectos'
    }
  },
});

// Drawer with all stack projects navigators
const AppDrawerNavigator = createDrawerNavigator({
  AboutMe: {
    screen: AboutMeNavigator,
    navigationOptions: {
      drawerLabel: 'Sobre mi',
    }
  },
  Track: {
    screen: AppContainer,
    navigationOptions: {
      drawerLabel: 'Trackeo GPS',
    }
  },
  StatusDrawer: {
    screen: StatusStack,
    navigationOptions: {
      title: 'Pantallas de estados'
    }
  },
  JobsScreen: {
    screen: JobsNavigator,
    navigationOptions: {
      title: 'Trabajos y Proyectos'
    }
  },
  Logout: {
    screen: LogoutScreen,
    navigationOptions: {
      drawerLabel: 'Salir',
    }
  }
}, {
    initialRouteName: 'AboutMe',
})


const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: AuthNavigator,
  App: AppDrawerNavigator
}, {
  initialRouteName: 'ResolveAuth'
});

export default createAppContainer(switchNavigator);