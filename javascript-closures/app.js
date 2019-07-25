function outerFunction(a, b) {
  let number = a + b;

  return () => {
    number += number;

    return number;
  };
}

const result = outerFunction(12, 12);
console.log(result());
