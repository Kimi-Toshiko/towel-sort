
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = new Array;
  if (matrix === undefined || matrix.length === 0) {
    console.log([]);
    return [];
  }
  else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0)
        matrix[i].map(el => res.push(el));
      else
        matrix[i].reverse().map(el => res.push(el));
    }
  }

  return res;
}