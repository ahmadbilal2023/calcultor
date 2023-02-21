let result = document.getElementById('result');

function append(value) {
  result.value += value;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (e) {
    alert('Invalid Calculation');
  }
}

function clearResult() {
  result.value = '';
}
