import React, {PureComponent} from "react"
import {StyleSheet, View} from "react-native"

import theme from "./theme"

class HR extends PureComponent {
  render() {
    return (
      <View style={styles.hr} />
    )
  }
}

const styles = StyleSheet.create({
  hr: {
    backgroundColor: theme.colors.darkest,
    height: 2,
    marginBottom: theme.padding
  }
})

export default HR
