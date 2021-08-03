const value = 10;

function positiveOrNegative(value) {
  if (value > 0) {
    return "Positive";
  } else if (value < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(positiveOrNegative(value));
