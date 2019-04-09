import React, {Component} from "react"

import {Wrapper} from "../Components/Theme"
import Bpm from "../Components/Bpm/Bpm"

class BpmScreen extends Component {
  render() {
    return (
      <Wrapper title="BPM">
        <Bpm />
      </Wrapper>
    )
  }
}

export default BpmScreen
