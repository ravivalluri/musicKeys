import React, {PureComponent} from "react"
import {StyleSheet, Text, View} from "react-native"

import {Button} from "../Theme"
import {calculateBpm} from "../../utils"

interface Props {}

interface State {
  presses: number[],
}

class Bpm extends PureComponent<Props, State> {
  state = {
    presses: []
  }

  reset = () => {
    this.setState({presses: []})
  }

  count = () => {
    this.setState((prevState) => ({
      presses: [...prevState.presses, new Date().getTime()]
    }))
  }

  render() {
    const bpm = calculateBpm(this.state.presses)

    return (
      <View style={styles.wrapper}>
        <View style={styles.bpm}>
          {bpm > 0 &&
            <Text style={styles.text}>{bpm}BPM</Text>
          }
        </View>

        <View style={styles.press}>
          <Button onPress={this.count} text="Press" />
        </View>

        <View style={styles.reset}>
          {bpm > 0 &&
            <Button onPress={this.reset} text="Reset" />
          }
        </View>
      </View>
    )
  }
}

export default Bpm

const styles = StyleSheet.create({
  bpm: {
    height: 100
  },
  press: {
    height: 100
  },
  reset: {
  },
  text: {
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center"
  },
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly"
  }
})
