const getSeconds = (min, sec = 60) => {
  return min * sec;
};

let res = getSeconds(3);
console.log(res);
