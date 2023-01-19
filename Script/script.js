function calculate(expression) {
  try {
    return eval(expression);
  } catch (e) {
    return "Error";
  }
}

function updateExpression(expression, btn) {
  document.getElementById("expression").value += btn;
}

function clearExpression() {
  document.getElementById("expression").value = "";
}

function backspace() {
  var exp = document.getElementById("expression").value;
  document.getElementById("expression").value = exp.substring(0, exp.length - 1);
}