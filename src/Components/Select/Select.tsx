import React, {Component} from "react"
import {View, StyleSheet} from "react-native"
import Picker from "react-native-picker-select"

import {notes} from "../../data"
import {theme} from "../Theme"

interface Props {
  id: string,
  isLast: boolean,
  position: string,
  selectedNote?: string,
  updateNotes(note: string): void
}

class Select extends Component<Props> {
  render() {
    const {id, isLast, position, selectedNote, updateNotes} = this.props

    return (
      <View testID={`${id}__view`} style={{marginBottom: isLast ? 0 : theme.padding}}>
        <Picker
          items={notes.map((note: string) => ({label: note.toUpperCase(), value: note}))}
          onValueChange={updateNotes}
          placeholder={{label: `${position} note`}}
          style={{...pickerSelectStyles}}
          value={selectedNote} />
      </View>
    )
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderColor: theme.colors.darkest,
    borderRadius: 3,
    borderWidth: 1,
    color: theme.colors.text,
    fontFamily: "quicksand",
    fontSize: theme.fontSize,
    paddingHorizontal: theme.padding,
    paddingVertical: theme.padding,
    textAlign: "center"
  }
})

export default Select
