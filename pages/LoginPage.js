/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Slider,
  StatusBar,
} from 'react-native';

import Colors from '../styles/Colors'


import { createAnimatableComponent, View, Text } from 'react-native-animatable';

import { connect } from 'react-redux';
import { StandardButton, OutlineButton } from '../components/buttons';
import { Button } from 'react-native-material-design';
import {
  goToLeaguePage,
  goToAnimationPage,
  goToMainPage,
} from '../actions/PageActions';


class LoginPage extends Component {
  render() {
    console.log("render");
    return (
      <View style={{ flex:1 }}>
                <StatusBar
          backgroundColor={Colors.primaryColorDark}
          barStyle="default"/>
      <View style={styles.container}>
        <View animation="tada" delay={1500}>
        <TouchableOpacity onPress={this.props.goToAnimationPage}>
        <Text style={styles.welcome}>
          Glicko rater
        </Text>
      </TouchableOpacity>
        <Text style={styles.instructions}>
          Created with react native.
        </Text>
        </View>
      </View>
      <View style={{ alignItems: 'center'}}>
        <OutlineButton text = "Login" onPress={this.props.goToLeaguePage} style={{width: 200}}/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const ConnectedApp = connect(
  state => ({
    routing: state.routing,
  }),
  (dispatch) => ({
    goToMainPage: () => dispatch(goToMainPage()),
    goToLeaguePage: () => dispatch(goToLeaguePage()),
    goToAnimationPage: () => dispatch(goToAnimationPage()),
  }),
)(LoginPage);

export default ConnectedApp;
