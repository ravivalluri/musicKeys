import React, {PureComponent} from "react"
import {Text, View, StyleSheet} from "react-native"

import theme from "./theme"

interface Props {
  title: string
}
class Header extends PureComponent<Props> {
  render() {
    const {title} = this.props

    return (
      <View style={styles.view}>
        <Text style={styles.text}>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: theme.colors.primary,
    paddingBottom: theme.padding * 2,
    paddingLeft: theme.padding,
    paddingRight: theme.padding,
    paddingTop: (theme.padding * 3),
    shadowColor: theme.colors.text,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2
  },
  text: {
    color: theme.colors.lightest,
    fontSize: 30,
    fontFamily: "quicksand",
    fontWeight: "bold",
    textAlign: "center"
  }
})

export default Header
