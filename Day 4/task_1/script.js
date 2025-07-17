function calculate(operator) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultField = document.getElementById('result');
    if (isNaN(num1) || num1 == "" || isNaN(num2) || num2 == "") {
      alert("Please enter valid numbers in both fields.");
      return;
    }
  
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
  
    if (operator == '/' && n2 == 0) {
      alert("Division by zero is not allowed.");
      return;
    }
  
    let result;
    
    switch (operator) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n1 / n2;
        break;
    }
  
    resultField.value = result;
  }
  