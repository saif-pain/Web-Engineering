function bmi() {
  const weight = parseFloat(document.getElementById("ojon").value);
  const height = parseFloat(document.getElementById("lomba").value);
  const resultField = document.getElementById("result");

  if (isNaN(weight) || weight <= 0) {
    alert("Please enter a valid weight (kg)");
    return;
  }

  if (isNaN(height) || height <= 0) {
    alert("Please enter a valid height (m)");
    return;
  }

  const bmiValue = weight / (height * height);
  resultField.value = bmiValue.toFixed(2);
}
