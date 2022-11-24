import React from 'react';
import {  AppRegistry,  asset,  Pano,  Text,  View,  VrButton,  Box,  Cylinder,  Sphere,  Animated,} from 'react-vr';
import { Easing } from 'react-native';


export default class animation extends React.Component
 {
  
  constructor() {
    super();
    this.state = {
      animateValue: new Animated.Value(2.1)
    };
   }
 
  componentDidMount() {
     Animated.timing(
       this.state.animateValue,
       {
         toValue: -0.3,
         duration: 1000,
         delay: 1000,
        //  easing: Easing.bounce,
        //  easing: Easing.ease,
        //  easing: Easing.linear,
        //  easing: Easing.elastic(50),
        //  easing: Easing.back(5),
       }
     ).start();
   }
 
   render() {
     return (
         <View>
           <Pano source={asset('chess-world.jpg')}/>
           <Animated.Text
             style={{
               backgroundColor: '#777879',
               fontSize: 0.8,              
               layoutOrigin: [0.5, 0.5],
               transform: [
                 {translateY: this.state.animateValue},
                 {translateZ: -5},
                 {translateX: 0}
               ]
             }}>
             Timing Animation
           </Animated.Text>
         </View>
     );
   }
 };AppRegistry.registerComponent('WelcomeToVR', () => animation);
