import React, {PureComponent} from "react"
import {StyleSheet, Text} from "react-native"

import Card from "./Card"
import theme from "./theme"

interface Props {
  id: string,
  text: string
}

class Empty extends PureComponent<Props> {
  render() {
    const {id, text} = this.props

    return (
      <Card id={`${id}__empty`}>
        <Text testID={`${id}__empty__text`} style={styles.text}>{text}</Text>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "quicksand",
    fontSize: theme.fontSize,
    textAlign: "center"
  }
})

export default Empty
