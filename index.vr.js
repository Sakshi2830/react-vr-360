import React from 'react';
import {
  AppRegistry,
  asset,
  Box,
  Cylinder,
  Pano,
  Sphere,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
constructor(){
  super();
  this.state={buttonText:"Default Button"};
}
  triggerEnter(){
    this.setState({buttonText:"Mouse Enter"})
  }
  triggerExit(){
    this.setState({buttonText:"Mouse Exit"})
  }
  triggerClick(){
    this.setState({buttonText:"Mouse click"})
  }
  triggerLongClick(){
    this.setState({buttonText:"come on byr byr now"})
  }

  render() {
    return (
      <View>
        <Pano source={asset("env.jpg")}/>
        <VrButton 
        onEnter={this.triggerEnter.bind(this)}
        onExit={this.triggerExit.bind(this)}
        onClick={this.triggerClick.bind(this)}
        onLongClick={this.triggerLongClick.bind(this)}
        > 
      <Text
      style={{
        fontSize:0.3,
        textAlign:"center",
        backgroundColor:"red",

        transform:[{translate:[-1,0,-3]}]
      }}>
        {this.state.buttonText}
      </Text>
         </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
