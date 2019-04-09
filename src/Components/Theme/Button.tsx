import React, {PureComponent} from "react"
import {StyleSheet, Text, TouchableOpacity} from "react-native"

import theme from "./theme"

interface Props {
  id: string,
  onPress(): void,
  text: string
}

class Button extends PureComponent<Props> {
  render() {
    const {id, onPress, text} = this.props

    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}
        testID={`${id}__button`}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    color: theme.colors.darkest,
    padding: theme.padding
  },
  text: {
    color: theme.colors.lightest,
    fontFamily: "quicksand",
    fontSize: 22,
    textAlign: "center"
  }
})

export default Button
