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

  // constructor(props){
  //   super(props);
  //   this.state=
  //   {
  //     Txt:"Hello World",
  //     imgSrc:"chess-world.jpg"
  //   };
  //   this.i=0
  // }
  // start(){
  //   if(this.i % 2 ==0){
  //     this.setState({
  //       Txt:"State1",
  //       imgSrc:"chess-world.jpg"
  //   }) 
  // }
  // else {
  //   this.setState({
  //     Txt:"state2",
  //     imgSrc:"env.jpg"
  //   })
  // }
  // this.i++;
  // }

  render() {
    return (
      <View>
        <Pano source={asset("env.jpg")}/>
        {/* <VrButton onClick={() => this.start()}> */}
        <Cylinder
        radiusTop={0.2}
        radiusBottom={0.2}
        dimHeight={0.3}
        segments={90}
        // wireframe={true}

        texture={asset("chess-world.jpg")}
          style={{
            color:'white',
            transform:[{translate:[0.75,0,-2]},{rotateY:45},{rotateX:45}]

          }}>
         
        </Cylinder>
        {/* </VrButton> */}
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
