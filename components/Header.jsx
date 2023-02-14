import { StyleSheet, Text,Dimensions, View, TouchableOpacity } from 'react-native'
import React from 'react'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { useState } from 'react'
import { useEffect } from 'react'

const Header = ({number,setCurrentNumber}) => {
  
 const onSwipe = (gestureState) => {
      if(number.length >= 2){
        setCurrentNumber(number.slice(0,-1))
      }
      else{
        setCurrentNumber("0")
      }
    }
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };
  return (
    <View style = {styles.container}>
      <GestureRecognizer
        onSwipeUp={(state) => onSwipe(state)}
        onSwipeDown={(state) => onSwipe(state)}
        onSwipeLeft={(state) => onSwipe(state)}
        onSwipeRight={(state) => onSwipe(state)}
        config={config}>

        <Text style = {styles.text}>
          {number}
        </Text>
      </GestureRecognizer>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

  container:{
    width:"100%",
    height:Math.floor(Dimensions.get("window").height / 3 ),
    backgroundColor: Platform.OS === "android" ? "white" : "black",
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight:"5%",
  },
  text :{
    color:Platform.OS === "android" ? "black" : "white",
    fontSize:100,
    fontWeight:"normal",
  }
})