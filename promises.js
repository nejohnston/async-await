function mockAsyncSlowAdder(number1, number2) {
  return new Promise((resolve, reject) => {
    console.log("Slowly adding...", number1, "+", number2);

    setTimeout(() => {
      const added = number1 + number2;
      resolve(added);
    }, 2000);
  });
}
