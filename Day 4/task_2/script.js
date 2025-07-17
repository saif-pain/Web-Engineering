function calculate(bmi) {
  const num1 = document.getElementById("ojon").value;
  const num2 = document.getElementById("lomba").value;
  const resultField = document.getElementById("result");

  if (isNaN(num1) || num1 == "") {
    alert("Please enter valid height");
    return;
  } 
  
  else if (isNaN(num2) || num2 == "") {
    alert("Please enter valid weight");
    return;
  }

}
