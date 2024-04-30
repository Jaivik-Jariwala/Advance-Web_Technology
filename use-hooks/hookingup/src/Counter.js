import React, { useReducer } from "react";

// Reducer function
function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { num: state.num + 1 };
    default:
      throw new Error('Unknown action');
  }
}

// Custom hook
export function useCounter(initialState) {
  const [state, dispatch] = useReducer(countReducer, initialState);
  
  const increment = () => {
    dispatch({ type: 'increment' });
  };
  
  return {
    num: state.num,
    increment
  };
}

// Counter component using the custom hook
export default function Counter() {
  const { num, increment } = useCounter({ num: 1 });
  
  return (
    <>
      <button onClick={increment}>Press</button> 
      <p>Hello, you are in {num}</p>
    </>
  );
}
