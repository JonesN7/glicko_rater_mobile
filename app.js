import React from 'react';
import { connect, Provider } from 'react-redux'
import { UIManager, Platform } from 'react-native';

import store from './store';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import LeagueSelectPage from './pages/LeagueSelectPage';
import AnimationTestPage from './pages/AnimationTestPage';
import PlayerPage from './pages/PlayerPage';


const pages = { 'LoginPage': LoginPage, 'MainPage': MainPage,
  'LeagueSelectPage': LeagueSelectPage, 'AnimationTestPage': AnimationTestPage,
  'PlayerPage': PlayerPage };

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Page = (props) => {
  const DisplayPage = pages[props.pageName];
  return <DisplayPage />
};

const ConnectedPage = connect (
  (state) => ({
    pageName: state.routing.name,
  }),
)(Page);

const ReduxApp = () => (
  <Provider store={store}>
    <ConnectedPage />
  </Provider>
);

export default ReduxApp;
