import React from 'react';
import {
  AppRegistry,
  asset,
  Box,
  Pano,
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
        <Box
        dimWidth={0.35}
        dimHeight={0.35}
        dimDepth={0.35}
        // wireframe={true}

        texture={asset("chess-world.jpg")}
          style={{
            color:'white',
            transform:[{translate:[0,0,-2]},{rotateX:45},{rotateY:50},{scale:[2,0.7,1.5]}]

          }}>
         
        </Box>
        {/* </VrButton> */}
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
