import React, {Component} from "react"
import {NavigationScreenProp} from "react-navigation"

import {Wrapper} from "../Components/Theme"
import {Key} from "../Components"
import {getKeyFromSlug} from "../utils"

interface Props {
  navigation: NavigationScreenProp<any, any>
}

class KeyScreen extends Component<Props> {
  render() {
    const {navigation} = this.props
    const itemId = navigation.getParam("itemId")
    const foundKey = getKeyFromSlug(itemId)

    return (
      <Wrapper title={foundKey.key.toUpperCase()}>
        <Key foundKey={foundKey} />
      </Wrapper>
    )
  }
}

export default KeyScreen
