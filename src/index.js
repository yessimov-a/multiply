const add = (valueOne, valueTwo) => {
  let a = valueOne.toString().split('').reverse().join('');
  let b = valueTwo.toString().split('').reverse().join('');
  const recurs = (a, b, i = 0, ost = 0, result = '') => {
    if (a.toString().length <= i && b.toString().length <= i && ost == 0) return result;
    let value = (a[i] ? +a[i] : 0) + (b[i] ? +b[i] : 0) + +ost;
    if (value > 9) {
      result += value.toString()[1];
      i += 1;
      return recurs(a, b, i, value.toString()[0], result);
    } else {
      result += value.toString();
      i += 1;
      return recurs(a, b, i, 0, result);
    }
  }
  let res = recurs(a, b);
  return res.split('').reverse().join('')
}

module.exports = function multiply(one, two) {
  let a = one.split('').reverse().join('');
  let b = two.split('').reverse().join('');

  let final = [];
  let arr = [];
  let secondZeros = '';
  let i = 0;
  let ost = 0;
  while (i < a.length || ost != 0) {
    ost = 0;
    let zeros = '';
    let result = ''
    let j = 0;
    while (j < b.length || ost != 0) {
      let value = (a[i] ? +a[i] : 0) * (b[j] ? +b[j] : 0) + +ost;
      if (value > 10) {
        result = value.toString()[1] + zeros + secondZeros;
        ost = value.toString()[0];
      } else {

        result = value.toString() + zeros + secondZeros;
        ost = 0;
      }
      zeros += '0';
      arr.push(result);
      j++
    }
    i++
    secondZeros += '0'
    final.push(arr);
    arr = [];
    zeros = ""
    ost = 0;
    result = ''
  }
  return final.map(item => {
    return item.reduce((a, b) => {
      return add(a, b)
    })
  }).reduce((a, b) => {
    return add(a, b)
  })
}
