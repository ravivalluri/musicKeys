import React, {PureComponent} from "react"
import {StyleSheet, Text, View} from "react-native"

import {theme} from "../Theme"

interface Props {
  note: string,
  selectedNotes: string[]
}

class Note extends PureComponent<Props> {
  render() {
    const {note, selectedNotes} = this.props

    return (
      <View style={styles.view}>
        <Text
          style={{
            fontWeight: selectedNotes.includes(note) ? "800" : "300",
            ...styles.note
          }}>
          {note}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  note: {
    fontSize: 18,
    textTransform: "uppercase"
  },
  view: {
    paddingRight: theme.padding
  }
})

export default Note
