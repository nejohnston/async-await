function mockAsyncSlowAdder(number1, number2, done) {
  console.log("Slowly adding...", number1, "+", number2);
  setTimeout(() => {
    const added = number1 + number2;
    done(null, added);
  }, 2000);
}

// Basic Callback Pattern
mockAsyncSlowAdder(1, 2, (err, result) => {
  console.log("Done!", result);
});
