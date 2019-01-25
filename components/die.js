import React from 'react';
import {View, Text, Image, Button} from 'react-native';

export default class Die extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasRolled: false,
      roll: '',
    }

  }

  rollDie(num) {
    let roll =  Math.floor((Math.random() * num) + 1);
    return this.setState({
      hasRolled: true,
      roll,
    })
  }

  render() {
    return (
      <View>
        <Text>This is a {this.props.sides} sided die</Text>
        {this.state.hasRolled &&
        <Text>You rolled a {this.state.roll}!</Text>
      }
      <Button
        onPress={() => {
          this.rollDie(this.props.sides)
        }}
        title="Roll"
      />
    </View>
  )
}
}
