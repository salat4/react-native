import { StyleSheet, Text, View ,FlatList, Platform, TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'
import data from "../json/button.json"
import { Button } from '@rneui/themed';
import { useState } from 'react'


const MainButton = ({handleNumber,handleOparation,number}) => {

  const handleClick = (title) =>{
  if(number.length < 6)  {
    if(!isNaN(title)){
      handleNumber(title)
   }
   else if (title === "."){
    number === "0" ? handleNumber("0.") : [...number].includes(".") === false &&  handleNumber(title);
   }
   else{
     handleOparation(title)
   }
 }
  }  
  return (
    <View style = {styles.container}>
      <FlatList 
      contentContainerStyle = {styles.list}
      data={data}
      horizontal={false}
      numColumns = {4}
      renderItem={({item}) => 
      <TouchableOpacity onPress = {()=>handleClick(item.title)} style={[item.button !== "main" && item.button !=="number" && styles.additionalButton , item.button === "main" && styles.mainButton ,item.title === "0" && styles.zeroButton, item.button === "numbers" && item.title !== "0" && styles.numberButton , styles.buttonStyle]}>
        <Text style = {[item.button === "additional" && styles.additionalTitle , item.button === "main" && styles.mainTitle ,item.title === "0" && styles.zeroTitle, item.button === "numbers" && styles.numberTitle , styles.titleStyle]}  value = {item.title}>{item.title}</Text>
      </TouchableOpacity>
        }
      keyExtractor={item => item.id}></FlatList>
    </View>
  )
}

export default MainButton

const styles = StyleSheet.create({
  container:{
    width:"100%",
    paddingHorizontal:Platform.OS === "android" ?  0 : "4%",
    paddingBottom:Platform.OS === "android" ?  0 : "4%",
    height:"70%",
    backgroundColor: Platform.OS === "android" ? "white" : "black",
    borderTopColor: "black",
    borderTopWidth: Platform.OS === "android" ? 1 : 0
  },
  buttonStyle:{
    margin:3,
    height: Math.floor(Dimensions.get("window").width / 4 - 10),
    borderRadius: Platform.OS === "android" ? null : 50,
    borderWidth:1,
    borderColor: "black",
  },
  additionalButton:{
    alignItems:"center",
    justifyContent:"center",
    width:"23%",
    backgroundColor:Platform.OS === "android" ? "white" : "grey" ,
  },
  mainButton:{
    alignItems:"center",
    justifyContent:"center",
    width:"23%",
    backgroundColor:Platform.OS === "android" ? "white" : "orange" ,

  },
  numberButton:{
    alignItems:"center",
    justifyContent:"center",
    width:"23%",
    backgroundColor:Platform.OS === "android" ? "white" : "#383838" ,
  },
  additionalTitle:{
    color :Platform.OS === "android" ? "black" : "black",
  },
  numberTitle:{
    color :Platform.OS === "android" ? "black" : "white",
  },
  mainTitle:{
    color :Platform.OS === "android" ? "black" : "white",
  },
  titleStyle:{
    fontSize: 35 ,
  },
zeroButton:{
  alignItems:"flex-start",
  paddingLeft:"10%",
  justifyContent:"center",
  width:"47%",
  backgroundColor:Platform.OS === "android" ? "white" : "#383838" ,

},

  containerStyle:{
    width:Platform.OS === "android" ? "25%" : "21%",
    marginHorizontal: Platform.OS === "android" ? 0 : "2%",
    marginVertical: Platform.OS === "android" ? 0 : "2%",
  },
  
})