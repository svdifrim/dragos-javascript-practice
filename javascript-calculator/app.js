(function() {
  const calculator = {
    a: "",
    b: "",
    read: function() {
      this.a = parseFloat(prompt("Enter your first name"));
      this.b = parseFloat(prompt("Enter your second number"));
    },
    sum: function() {
      return this.a + this.b;
    },
    mul: function() {
      return this.a * this.b;
    }
  };

  calculator.read();
  alert(calculator.sum());
  alert(calculator.sum());
})();
