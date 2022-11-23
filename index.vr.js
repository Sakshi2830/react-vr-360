import React from 'react';
import {  AppRegistry,  asset,  Pano,  Text,  View,  VrButton,  Box,  Cylinder,  Sphere,  Animated,} from 'react-vr';
import { Easing } from 'react-native';


export default class animation extends React.Component
 {
  constructor()
   {
    super();
    this.state = { spinY: new Animated.Value(0) };
  }

  spinAnimation()
   {
    this.state.spinY.setValue(0);

    Animated.timing( this.state.spinY, {toValue: 1,  duration: 3000, easing: Easing.linear} )
    .start( () => this.spinAnimation() );
  }

  componentDidMount()
  {
    this.spinAnimation();
  }

  
  render() {
    const spinY = this.state.spinY.interpolate({inputRange: [0, 1], outputRange: ['0deg', '360deg'] });

    const AnimatedBox = Animated.createAnimatedComponent(Box);
    const AnimatedSphere = Animated.createAnimatedComponent(Sphere);
    const AnimatedCylinder = Animated.createAnimatedComponent(Cylinder);

    return (
      <View>
      <Pano source={asset("chess-world.jpg")}/>
      <AnimatedBox
        dimWidth={0.35}
        dimDepth={0.35}
        dimHeight={0.35}
        texture={asset("chess-world.jpg")}
        style={{
          color: '#ffffff',
          transform: [{translate: [0,0,-2]}, {rotateX: 45}, {rotateY: spinY}, {scale: [1, 1, 1]}],
        }}
      />

      <AnimatedSphere
        radius={0.1}
        widthSegments={90}
        heightSegments={90}
        texture={asset("chess-world.jpg")}
        style={{
          color: '#ffffff',
          transform: [{translate: [0.75,0,-2]}, {rotateY: spinY}, {scale: [2, 2, 2]}],
        }}
      />

      <AnimatedCylinder
        radiusTop={0.2}
        radiusBottom={0.2}
        dimHeight={0.3}
        segments={90}
        texture={asset("chess-world.jpg")}
        style={{
          color: '#ffffff',
          transform: [{translate: [-0.75,0,-2]}, {rotateX: spinY}, {rotateY: spinY},],
        }}
      />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => animation);
