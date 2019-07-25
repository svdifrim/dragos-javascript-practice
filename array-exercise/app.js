function calculateAgeAverage() {
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

  const finalResult = result / arr.length;

  console.log(finalResult);
}

calculateAgeAverage();
