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

// "Callback Hell"
mockAsyncSlowAdder(1, 2, (err, result) => {
  if (!err) {
    mockAsyncSlowAdder(result, 2, (err, result2) => {
      if (!err) {
        mockAsyncSlowAdder(1, result2, (err, result3) => {
          if (!err) {
            mockAsyncSlowAdder(1, result3, (err, finalResult) => {
              console.log("Added 4 numbers:", finalResult);
              finalResult = finalResult;
            });
          }
        });
      }
    });
  }
});
