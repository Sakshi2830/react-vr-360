import React from 'react';
import {  AppRegistry,  asset,  Pano,  Text,  View,  VrButton,  Box,  Cylinder,  Sphere,  Animated,} from 'react-vr';
import { Easing } from 'react-native';


export default class animation extends React.Component
 {
  
  constructor() {
    super();
    this.state = {
      rotateImage: new Animated.Value(0)
    };
   }
 
  componentDidMount() {
     Animated.timing(
       this.state.rotateImage,
       {
         toValue: 3600,
         duration: 5000,
         delay: 0,
        //  easing: Easing.bounce,
        //  easing: Easing.ease,
        //  easing: Easing.linear,
        //  easing: Easing.elastic(50),
        //  easing: Easing.back(5),
       }
     ).start();
   }
 
handleDecay(){
  Animated.decay(
   this.state.rotateImage,{
    velocity:0.2,
    deceleration:0.999
   }
  ).start();
}

   render() {
     return (
         <View>
           <Pano source={asset('chess-world.jpg')}/>
           <Animated.Image
             style={{
               width:0.5,
               height:0.5,
               layoutOrigin:[0.5,0.1],
               transform: [
                 {translate: [0,0,-2]},
                 {rotateX:this.state.rotateImage}
                 
               ]
             }}source={asset('R.png')}>
            
           </Animated.Image>

           <VrButton billboarding={'on'}
           style={{
            backgroundColor:'grey',
            transform:[
              {translate:[-0.4,-0.3,-2]}
            ]
           }}

           onClick={this.handleDecay.bind(this)}
           >
            <Text>Stop it</Text>
            </VrButton>
         </View>
     );
   }
 };AppRegistry.registerComponent('WelcomeToVR', () => animation);
