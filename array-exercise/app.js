function calculateAgeAverage() {
  let sum = 0;
  const arr = [
    { name: "dgs", age: 21 },
    { name: "lolo", age: 41 },
    { name: "oo", age: 11 },
    { name: "dede", age: 3 },
    { name: "Cucu", age: 6 },
    { name: "Bia", age: 8 },
    { name: "Ed", age: 25 },
    { name: "Minu", age: 23 }
  ];

  const result = arr.reduce((a, b) => {
    return a + b.age;
  }, 0);

  //   const result = arr.map(item => {
  //     sum += item.age;
  //     return sum;
  //   });

  //   const finalResult = result[result.length - 1] / arr.length;

  const finalResult = result / arr.length;

  console.log(finalResult);
}

calculateAgeAverage();

const getThis = () => {
  const arr2 = [
    {
      name: "dgs",
      age: 21,
      getAge: function() {
        return `${this.name} is ${this.age}`;
      }
    },
    {
      name: "ggege",
      age: 13,
      getAge: function() {
        return `${this.name} is ${this.age}`;
      }
    },
    {
      name: "hehe",
      age: 221,
      getAge: function() {
        return `${this.name} is ${this.age}`;
      }
    }
  ];

  arr2.forEach(item => {
    console.log(item.getAge());
  });
};
