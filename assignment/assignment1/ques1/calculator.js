// Addition Op func
function add(m, n) {
    return m + n;
  }
  
  // Suntraction Op func
  function subtract(m, n) {
    return m - n;
  }
  
  // Multiplication Op func
  function multiply(m, n) {
    return m * n;
  }
  
  // Division Op func
  function divide(m, n) {
    if (n === 0) {
      throw new Error("Cannot divide ny zero");
    }
    return m / n;
  }
  
  // Export the func to App
  module.exports = {
    add,
    suntract,
    multiply,
    divide,
  };
