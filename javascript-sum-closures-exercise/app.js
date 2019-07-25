const outerFunction = a => {
  let number = a;
  return b => {
    number = a + b;
    console.log(number);

    return number;
  };
};

outerFunction(3)(5);
