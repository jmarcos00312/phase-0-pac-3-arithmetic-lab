add = (a, b) => {
  return a + b;
};
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function increment(n) {
  let total = n++;
  return total + 1;
}
function decrement(n) {
  let total = n--;
  return total - 1;
}
function makeInt(n) {
  return parseInt(n, 10);
}
function preserveDecimal(n) {
  return parseFloat(n);
}
