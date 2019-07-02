const check = (num) => {

  // We reverse the string and put it in an array, as numbers
  const numArray = num.toString().split('').map(x => Number(x)).reverse();

  const isOdd = i => i % 2 === 0; // Arrays starts at 0
  const twoDigit = x => (x * 2) > 9 ? ((x * 2) - 9) : (x * 2);

  const sumEven = numArray.reduce((acc,x,i) => isOdd(i) ? acc : acc + twoDigit(x),0);
  const sumOdd = numArray.reduce((acc,x,i) => isOdd(i) ? acc + x : acc,0);

  return ((sumOdd + sumEven) % 10) === 0;
};

module.exports = check;