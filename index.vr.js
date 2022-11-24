import React from 'react';
import {  AppRegistry,  asset,  Pano,  View,  Animated, Model,PointLight, DirectionalLight, SpotLight, AmbientLight} from 'react-vr';
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

    ).start(() => this.antiRotate());
  }

  antiRotate(){
    this.changeColor();
    this.state.animateValue.setValue(360);
    Animated.timing(this.state.animateValue,{
      toValue:0,
      duration:2500,
      easing: Easing.linear
    }).start(()=>this.rotate())

  }

  changeColor(){
    let rn = Math.floor((Math.random()*5) +1)
    if(rn == 1){
      this.setState({
        output:'red'
    });}
    else if(rn == 2){
      this.setState({
        output:'green',
      })
    }
    else if(rn == 3){
      this.setState({
        output:'orange'
      })
    }
    else if(rn == 4){
      this.setState({
        output:'blue'
      })
    }
    else{
      this.setState({
        output:'violet'
      })
    }
  }
 
  
   render() {
    const AnimatedModel = Animated.createAnimatedComponent(Model)
     return (
         <View>
           <Pano source={asset('lobby.jpeg')}/>
           <PointLight style={{color:"grey", transform:[{translate:[0,0,0]}]}}/>
           <SpotLight intensity={0.9} style={{color:this.state.output}}/>
           {/* <SpotLight angle={30} style={{
            color:"black", transform:[{translate:[0,0,0]},{rotateX:90}]
           }}/> */}
           {/* <DirectionalLight style={{color:"white", transform:[{rotateX: 90},{rotateY:45},{rotateZ:90}]}}/> */}
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


 