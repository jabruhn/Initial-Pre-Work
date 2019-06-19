//multiple ternary operators.

function checkSign(num) {
  return (num === 0 ? "zero" : (num >0) ? "positive" : "negative")
}

checkSign(10);
console.log(checkSign(1))
