import React, {PureComponent} from "react"
import {ScrollView, StyleSheet, View} from "react-native"

import Header from "./Header"
import theme from "./theme"

interface Props {
  title: string
}

class Wrapper extends PureComponent<Props> {
  render() {
    const {children, title} = this.props

    return (
      <ScrollView
        stickyHeaderIndices={[0]}>
        <Header title={title} />
        <View style={styles.view}>
          {children}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    padding: theme.padding
  }
})

export default Wrapper
