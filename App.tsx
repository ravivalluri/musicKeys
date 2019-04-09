import React, {Component} from "react"
import {createStackNavigator, createAppContainer} from "react-navigation"
import {Text} from "react-native"
import {Font} from "expo"

import BpmScreen from "./src/Screens/BpmScreen"
import HomeScreen from "./src/Screens/HomeScreen"
import KeyScreen from "./src/Screens/KeyScreen"

const AppNavigator = createStackNavigator({
  Bpm: {
    screen: BpmScreen
  },
  Home: {
    screen: HomeScreen
  },
  Key: {
    screen: KeyScreen
  }
}, {
  headerMode: "none",
  initialRouteName: "Home"
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      quicksand: require("./assets/fonts/Quicksand/Quicksand-Regular.ttf")
    })

    this.setState({fontLoaded: true})
  }

  render() {
    const {fontLoaded} = this.state

    if (!fontLoaded) { return <Text>loading...</Text> }
    return <AppContainer />
  }
}
