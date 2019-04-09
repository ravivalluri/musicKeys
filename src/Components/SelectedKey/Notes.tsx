import React, {PureComponent} from "react"
import {StyleSheet, View} from "react-native"

import {Key} from "../../types"
import Note from "./Note"

interface Props {
  selectedKey: Key,
  selectedNotes: string[]
}

class Notes extends PureComponent<Props> {
  render() {
    const {selectedKey, selectedNotes} = this.props

    return (
      <View style={styles.view}>
        {selectedKey.notes.map((note: string) =>
          <Note key={note} note={note} selectedNotes={selectedNotes} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row"
  }
})

export default Notes
