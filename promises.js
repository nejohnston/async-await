function mockAsyncSlowAdder(number1, number2) {
  return new Promise((resolve, reject) => {
    console.log("Slowly adding...", number1, "+", number2);

    setTimeout(() => {
      const added = number1 + number2;
      resolve(added);
    }, 2000);
  });
}

mockAsyncSlowAdder(1, 2)
  .then(result => {
    return mockAsyncSlowAdder(result, 2);
  })
  .then(result2 => {
    return mockAsyncSlowAdder(result2, 2);
  })
  .then(result3 => {
    return mockAsyncSlowAdder(result3, 2);
  })
  .then(finalResult => {
    return mockAsyncSlowAdder(finalResult, 2);
  })
  .catch(err => {
    console.log("error");
  });
