let multiply = function (x, y) {
  console.log(x * y);
};

let add = function (x) {
  return function (y) {
    console.log(x + y);
  };
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

let addHere = add(5);
addHere(8);
