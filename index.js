/*
const check = (num) => {
  const numArray = num.toString().split('').map(x => Number(x)).reverse();
  const reduceTotal = (prev, x) => (prev || 0) + x;
  const isEven = i => i % 2 !== 0;

  console.log(numArray);

  const sumOdd = numArray.map((x,i) => isEven(i) ? 0 : x).reduce(reduceTotal);

  const sumEven = numArray.map((x,i) => isEven(i) ? 0 : ((x * 2) >= 10 ? x * 2 - 9 : x * 2))
    .reduce(reduceTotal);

  //return sumOdd;
  return ((sumOdd + sumEven) % 10) === 0;
};
*/

const check = (num) => {
  const numArray = num.toString().split('').map(x => Number(x)).reverse();
  const isOdd = i => i % 2 === 0; // Arrays are based 0
  const twoDigit = x => (x * 2) > 9 ? ((x * 2) - 9) : (x * 2);

  const sumEven = numArray.reduce((acc,x,i) => isOdd(i) ? acc : acc + twoDigit(x),0);
  const sumOdd = numArray.reduce((acc,x,i) => isOdd(i) ? acc + x : acc,0);

  //return sumOdd;
  return ((sumOdd + sumEven) % 10) === 0;
};

module.exports = { check };