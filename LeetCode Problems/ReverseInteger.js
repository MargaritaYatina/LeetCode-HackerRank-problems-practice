/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0;
  let new_num = x;
  let element;
  let string = x.toString();

  if (x >= 0) {
    for (let i = 0; i < string.length; i++) {
      element = new_num % 10;
      rev = rev * 10 + element;
      new_num = Math.trunc(new_num / 10);
    }
  } else {
    for (let i = 0; i < string.length - 1; i++) {
      element = new_num % 10;
      rev = rev * 10 + element;
      new_num = Math.trunc(new_num / 10);
    }
  }
  if (rev >= Math.pow(2, 31) - 1 || rev <= Math.pow(-2, 31)) {
    return 0;
  }
  return rev;
};

console.log(reverse(-321));
