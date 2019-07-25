const outerFunction = a => {
  let number = a;
  return b => {
    number = a + b;
    console.log(number);

    return number;
  };
};

outerFunction(3)(5);

const obj = {
  name: "whatever",
  age: "21",
  getName: function() {
    console.log(this.age);
    return () => {
      console.log(this.age);
    };
  }
};

console.log(obj.getName()());
