function incrementNumber() {
  // Get the element containing the number
  let numberElement = document.getElementsByClassName("score");
console.log(numberElement);
  // Extract the current value of the number and convert it to an integer
  var currentValue = parseInt(numberElement.innerText);

  // Increment the number
  var newValue = currentValue + 1;

  // Update the element with the new value
  numberElement.innerText = newValue;
}
