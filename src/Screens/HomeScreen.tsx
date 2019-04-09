import React, { Component } from 'react';
import { NavigationScreenProp } from 'react-navigation';

import { Home, Select } from '../Components';
import { Card, HR, Wrapper } from '../Components/Theme';
import { cleanArray, findKeys, toPosition } from '../utils';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  selectedNotes: string[];
}

class HomeScreen extends Component<Props, State> {
  state: State = {
    selectedNotes: ['', '', '']
  };

  updateNotes = (note: string, position: number) => {
    const { selectedNotes } = this.state;
    selectedNotes[position] = note;

    this.setState({ selectedNotes });
  };

  reset = () => {
    this.setState({ selectedNotes: ['', '', ''] });
  };

  render() {
    const { navigation } = this.props;
    const { selectedNotes } = this.state;
    const notes = cleanArray(selectedNotes);
    const keys = findKeys(notes);

    return (
      <Wrapper title="Keys and Chords">
        <Card id="homeScreen">
          {selectedNotes.map((note, i) => (
            <Select
              key={i}
              id={`homeScreenSelect__${i}`}
              isLast={i + 1 === selectedNotes.length}
              position={toPosition(i + 1)}
              selectedNote={note}
              updateNotes={(value: string) => this.updateNotes(value, i)}
            />
          ))}
        </Card>
        <HR />
        <Home
          navigation={navigation}
          notes={notes}
          keys={keys}
          reset={this.reset}
        />
      </Wrapper>
    );
  }
}

export default HomeScreen;
