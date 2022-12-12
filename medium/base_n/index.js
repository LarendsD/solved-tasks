export default (numberStr, radix) => !numberStr.toString().split('').find((num) => num >= radix);
