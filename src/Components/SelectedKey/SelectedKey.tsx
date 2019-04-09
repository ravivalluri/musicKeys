import React, {PureComponent} from "react"
import {StyleSheet, Text, TouchableHighlight, View} from "react-native"

import {Key} from "../../types"
import {theme} from "../Theme"
import SelectedKeyNotes from "./Notes"

interface Props {
  onPress(): void,
  selectedKey: Key,
  selectedNotes: string[]
}

class SelectedKey extends PureComponent<Props> {
  render() {
    const {onPress, selectedKey, selectedNotes} = this.props

    return (
      <TouchableHighlight
        testID={`selectKey__${selectedKey.key}`}
        style={styles.card}
        underlayColor={theme.colors.grey}
        onPress={onPress}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            {selectedKey.key}
          </Text>
          <View style={styles.content}>
            <View>
              <Text style={styles.type}>{selectedKey.type} | Relative minor: {selectedKey.relative}</Text>
            </View>
            <SelectedKeyNotes
              selectedNotes={selectedNotes}
              selectedKey={selectedKey} />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: theme.colors.lightest,
    marginBottom: theme.padding,
    padding: theme.padding
  },
  content: {
    fontFamily: "quicksand",
    flex: 4,
    paddingLeft: theme.padding
  },
  title: {
    color: theme.colors.secondary,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    fontFamily: "quicksand",
    fontSize: 40,
    fontWeight: "500",
    justifyContent: "center",
    paddingTop: 3,
    textAlign: "center",
    textTransform: "uppercase"
  },
  type: {
    fontFamily: "quicksand",
    fontSize: 20,
    paddingBottom: theme.padding,
    textTransform: "capitalize"
  },
  wrapper: {
    flexDirection: "row",
    fontFamily: "quicksand"
  }
})

export default SelectedKey
