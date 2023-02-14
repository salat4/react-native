export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null,
  };
  
  export const handleNumber = (title, state) => {
    if (state.currentValue === "0") {
      return { currentValue: `${title}` };
    }
  
    return {
      currentValue: `${state.currentValue}${title}`,
    };
  };
  
  const handleEqual = (state) => {
    const { currentValue, previousValue, operator } = state;
  
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = { operator: null, previousValue: null };
  
    switch (operator) {
      case "+":
        return {
          currentValue: `${previous + current}`,
          ...resetState,
        };
      case "-":
        return {
          currentValue: `${previous - current}`,
          ...resetState,
        };
      case "x":
        return {
          currentValue: `${previous * current}`,
          ...resetState,
        };
      case "÷":
        return {
          currentValue: `${previous / current}`,
          ...resetState,
        };
  
      default:
        return state;
    }
  };
  
  // calculator function
  const calculator = (button , title, state) => {
    switch (button) {
      case "numbers":
        // return console.log(state)
        return handleNumber(button , title);
      case "clear":
        return initialState;
      case "posneg":
        return {
          currentValue: `${parseFloat(state.currentValue) * -1}`,
        };
      case "percentage":
        return {
          currentValue: `${parseFloat(state.currentValue) * 0.01}`,
        };
      case "operator":
        return {
          operator: title,
          previousValue: state.currentValue,
          currentValue: "0",
        };
      case "equal":
        return handleEqual(state);
      default:
        return state;
    }
  };
  
  export default calculator;
  