import React from 'react';
import {  AppRegistry,  asset,  Pano,  View,  Animated, Model,PointLight, DirectionalLight, SpotLight} from 'react-vr';
import { Easing } from 'react-native';


export default class animation extends React.Component
 {
  
  constructor()
  {
    super();
    this.state = {
      animateValue: new Animated.Value(0)
    };
  }

  componentDidMount(){
    this.rotate();
  }

  rotate(){
      this.state.animateValue.setValue(0);
      Animated.timing(
        this.state.animateValue,
        {
          toValue: 360,
          duration: 2500,
          easing: Easing.linear,
        }

    ).start();
  }

 
  
   render() {
    const AnimatedModel = Animated.createAnimatedComponent(Model)
     return (
         <View>
           <Pano source={asset('lobby.jpeg')}/>
           <PointLight style={{color:"grey", transform:[{translate:[0,0,0]}]}}/>
           <SpotLight angle={30} style={{
            color:"black", transform:[{translate:[0,0,0]},{rotateX:90}]
           }}/>
           <DirectionalLight style={{color:"white", transform:[{rotateX: 90},{rotateY:45},{rotateZ:90}]}}/>
           <AnimatedModel 
           source={{
            obj:asset('boy.obj'),mtl:asset('boy.mtl')
           }}
           lit
           style={{
            transform:[
              {translate:[0,-8,-25]},
              {scale:[1,1,1]},
              {rotateY:this.state.animateValue}
            ]
           }}
           />
          
         </View>
     );
   }
 };AppRegistry.registerComponent('WelcomeToVR', () => animation);


 