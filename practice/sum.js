console.log("hello world!");

function sum(param) {
  // TODO: 請從 1 + 2 + 3 + .... + param
  let sum = 0;
  for (let i = 0; i < param + 1; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
sum(5);
sum(10);
