import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MainButtons from "../components/MainButton"
import Header from "../components/Header"
import { useState } from 'react'
const Calculator = () => {
  const [prevNumber, setPrevNumber] = useState(null)
  const [currentNumber, setCurrentNumber] = useState("0")
  const [operation, setOperation] = useState();
  const [countingOperator, setCountingOperator] = useState(null)
    switch (operation) {
      case "AC":
        setCurrentNumber("0")
        setPrevNumber(null)
        setOperation(null)
        setCountingOperator(null)
        break;
      case "±" :
        currentNumber !== "0" ? setCurrentNumber(`${parseFloat(currentNumber * -1)}`) : setCurrentNumber("-0")
        setOperation(null)
        break;
      case "%" :
        setCurrentNumber(`${parseFloat(currentNumber * 0.01)}`)
        setOperation(null)
        break;
      case "÷" :
        if (countingOperator === null){
          setPrevNumber(currentNumber)
          setCurrentNumber("0")
          setCountingOperator("÷")
          setOperation()
        }
        switch (countingOperator) {
          case "÷":
            // setPrevNumber(`${parseFloat(prevNumber) / parseFloat(currentNumber)}`)
            setCountingOperator("÷")
            setCurrentNumber(`${parseFloat(prevNumber) / parseFloat(currentNumber)}`)
            break;
          case "x":
            // setPrevNumber(`${parseFloat(prevNumber) * parseFloat(currentNumber)}`)
            setCountingOperator("x")
            setCurrentNumber(`${parseFloat(prevNumber) * parseFloat(currentNumber)}`)
            break;
          case "-":

            // setPrevNumber(`${parseFloat(prevNumber) - parseFloat(currentNumber)}`)
            setCountingOperator("-")
            setCurrentNumber(`${parseFloat(prevNumber) - parseFloat(currentNumber)}`)
            break;
          case "+":

            // setPrevNumber(`${parseFloat(prevNumber) + parseFloat(currentNumber)}`)
            setCountingOperator("+")
            setCurrentNumber(`${parseFloat(prevNumber) + parseFloat(currentNumber)}`)
            break;
        
          default:
            break;
        }
        
        
        break;
      case "x" :
        if (countingOperator === null){ setPrevNumber(currentNumber)
        setCurrentNumber("0")
        setCountingOperator("x")
        setOperation()}
        switch (countingOperator) {
          case "÷":
            setPrevNumber(`${parseFloat(prevNumber) / parseFloat(currentNumber)}`)
            setCountingOperator("÷")
            setCurrentNumber("0")
            // setCurrentNumber(`${parseFloat(prevNumber) / parseFloat(currentNumber)}`)
            setOperation()
            break;
          case "x":

            setPrevNumber(`${parseFloat(prevNumber) * parseFloat(currentNumber)}`)
            setCountingOperator("x")
            setCurrentNumber("0")
            // setCurrentNumber(`${parseFloat(prevNumber) * parseFloat(currentNumber)}`)
            setOperation()
            break;
          case "-":

            setPrevNumber(`${parseFloat(prevNumber) - parseFloat(currentNumber)}`)
            setCountingOperator("-")
            setCurrentNumber("0")
            // setCurrentNumber(`${parseFloat(prevNumber) - parseFloat(currentNumber)}`)
            setOperation()
            break;
          case "+":

            setPrevNumber(`${parseFloat(prevNumber) + parseFloat(currentNumber)}`)
            setCountingOperator("+")
            setCurrentNumber("0")
            // setCurrentNumber(`${parseFloat(prevNumber) + parseFloat(currentNumber)}`)
            setOperation()
            break;
        
          default:
            break;
        }
        break;
      case "-" :
        if (countingOperator === null){ setPrevNumber(currentNumber)
        setCurrentNumber("0")
        setCountingOperator("-")
        setOperation()}
        switch (countingOperator) {
          case "÷":
            setPrevNumber(`${parseFloat(prevNumber) / parseFloat(currentNumber)}`)
            setCountingOperator("÷")
            setCurrentNumber("0")
            // setCurrentNumber(`${parseFloat(prevNumber) / parseFloat(currentNumber)}`)
            setOperation()
            break;
          case "x":

            setPrevNumber(`${parseFloat(prevNumber) * parseFloat(currentNumber)}`)
            setCountingOperator("x")
            setCurrentNumber("0")
            // setCurrentNumber(`${parseFloat(prevNumber) * parseFloat(currentNumber)}`)
            setOperation()
            break;
          case "-":

            setPrevNumber(`${parseFloat(prevNumber) - parseFloat(currentNumber)}`)
            setCountingOperator("-")
            setCurrentNumber("0")
            // setCurrentNumber(`${parseFloat(prevNumber) - parseFloat(currentNumber)}`)
            setOperation()
            break;
          case "+":

            setPrevNumber(`${parseFloat(prevNumber) + parseFloat(currentNumber)}`)
            setCountingOperator("+")
            setCurrentNumber("0")
            // setCurrentNumber(`${parseFloat(prevNumber) + parseFloat(currentNumber)}`)
            setOperation()
            break;
        
          default:
            break;
        }
        break;
      case "+" :
        if (countingOperator === null){setPrevNumber(currentNumber)
        setCurrentNumber("0")
        setCountingOperator("+")
        setOperation()}
        switch (countingOperator) {
          case "÷":
            setPrevNumber(`${parseFloat(prevNumber) / parseFloat(currentNumber)}`)
            setCountingOperator("÷")
            setCurrentNumber("0")
            // setCurrentNumber(`${parseFloat(prevNumber) / parseFloat(currentNumber)}`)
            setOperation()
            break;
          case "x":

            setPrevNumber(`${parseFloat(prevNumber) * parseFloat(currentNumber)}`)
            setCountingOperator("x")
            setCurrentNumber("0")
            // setCurrentNumber(`${parseFloat(prevNumber) * parseFloat(currentNumber)}`)
            setOperation()
            break;
          case "-":

            setPrevNumber(`${parseFloat(prevNumber) - parseFloat(currentNumber)}`)
            setCountingOperator("-")
            setCurrentNumber("0")
            // setCurrentNumber(`${parseFloat(prevNumber) - parseFloat(currentNumber)}`)
            setOperation()
            break;
          case "+":

            setPrevNumber(`${parseFloat(prevNumber) + parseFloat(currentNumber)}`)
            setCountingOperator("+")
            setCurrentNumber("0")
            // setCurrentNumber(`${parseFloat(prevNumber) + parseFloat(currentNumber)}`)
            setOperation()
            break;
        
          default:
            break;
        }
        break;
      case "=" :
        if(countingOperator === "x"){
          setCurrentNumber(`${parseFloat(prevNumber) * parseFloat(currentNumber)}`)
        }
        if(countingOperator === "+"){
          setCurrentNumber(`${parseFloat(prevNumber) + parseFloat(currentNumber)}`)
        }
        if(countingOperator === "÷"){
          setCurrentNumber(`${parseFloat(prevNumber) / parseFloat(currentNumber)}`)
        }
        if(countingOperator === "-"){
          setCurrentNumber(`${parseFloat(prevNumber) - parseFloat(currentNumber)}`)
        }
        setCountingOperator(null)
        setOperation()
        break;
      default:
        break;
    }
  return (
    <View style = {styles.container}>
        <Header number = {currentNumber} setCurrentNumber = {setCurrentNumber}/>
        <MainButtons number = {currentNumber} handleOparation={(data)=>{setOperation(data)}} handleNumber = {(data)=>{currentNumber === "0" ? setCurrentNumber(`${data}`) : setCurrentNumber(`${currentNumber}${data}`)}}/>
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%"
  }
})