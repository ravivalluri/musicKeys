import React, {PureComponent} from "react"
import {NavigationScreenProp} from "react-navigation"

import {Key} from "../../types"
import {Button, Empty, HR} from "../Theme"
import SelectedKey from "../SelectedKey/SelectedKey"

interface Props {
  keys: Key[],
  navigation: NavigationScreenProp<any, any>,
  notes: string[],
  reset(): void
}

class Home extends PureComponent<Props> {
  render() {
    const {keys, navigation, notes, reset} = this.props

    if (notes.length === 0) {
      return <Empty id="noneSelected" text="Select some notes" />
    }

    return (
      <>
        {keys.map((key: Key, i: number) =>
          <SelectedKey
            key={i}
            onPress={() => navigation.navigate("Key", {itemId: key.key})}
            selectedKey={key}
            selectedNotes={notes} />
        )}

        {keys.length === 0 && <Empty id="noKeys" text="No keys found" />}

        <HR />
        <Button
          id="reset"
          onPress={reset}
          text="Reset" />
      </>
    )
  }
}

export default Home
