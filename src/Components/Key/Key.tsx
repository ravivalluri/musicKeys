import React, {PureComponent} from "react"
import {StyleSheet, Text, View} from "react-native"

import {Key} from "../../types"
import {Card, HR, theme} from "../Theme"
import SelectedKeyNotes from "../SelectedKey/Notes"
import {getKeyFromSlug} from "../../utils"

interface Props {
  foundKey: Key
}

class KeyWrapper extends PureComponent<Props> {
  render() {
    const {foundKey} = this.props

    return (
      <Card id={`keyScreen__${foundKey.key}`}>
        <View style={styles.view}>
          <Text style={styles.type}>Notes:</Text>
          <SelectedKeyNotes
            selectedNotes={[]}
            selectedKey={foundKey} />
        </View>
        <HR />
        <View>
          <Text style={styles.type}>Relative minor: {foundKey.relative}</Text>
          <Text style={styles.type}>Relative minor notes:</Text>
          <SelectedKeyNotes
            selectedNotes={foundKey.notes}
            selectedKey={getKeyFromSlug(foundKey.relative)} />
        </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  type: {
    fontFamily: "quicksand",
    fontSize: 20,
    paddingBottom: theme.padding,
    textTransform: "capitalize"
  },
  view: {
    paddingBottom: theme.padding
  }
})

export default KeyWrapper
