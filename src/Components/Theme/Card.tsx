import React, {PureComponent} from "react"
import {View, StyleSheet} from "react-native"

import theme from "./theme"

interface Props {
  id: string
}

class Card extends PureComponent<Props> {
  render() {
    const {children, id} = this.props

    return (
      <View testID={id} style={styles.card}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.lightest,
    borderRadius: 3,
    marginBottom: theme.padding,
    padding: theme.padding,
    shadowColor: theme.colors.text,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.05
  }
})

export default Card
