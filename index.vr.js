import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {

  constructor(props){
    super(props);
    this.state=
    {
      Txt:"Hello World",
      imgSrc:"chess-world.jpg"
    };
    this.i=0
  }
  start(){
    if(this.i % 2 ==0){
      this.setState({
        Txt:"State1",
        imgSrc:"chess-world.jpg"
    }) 
  }
  else {
    this.setState({
      Txt:"state2",
      imgSrc:"env.jpg"
    })
  }
  this.i++;
  }

  render() {
    return (
      <View>
        <Pano source={asset(this.state.imgSrc)}/>
        <VrButton onClick={() => this.start()}>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          {this.state.Txt}
        </Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
