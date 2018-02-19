function mockAsyncSlowAdder(number1, number2) {
  return new Promise((resolve, reject) => {
    console.log("Slowly adding...", number1, "+", number2);

    setTimeout(() => {
      const added = number1 + number2;
      if (!added) return reject("invalid addition..");
      resolve(added);
    }, 2000);
  });
}

const addEm = async () => {
  try {
    const result1 = await mockAsyncSlowAdder(1, 2);
    const result2 = await mockAsyncSlowAdder(1, result1);
    const fResult = await mockAsyncSlowAdder(1, result2);
    return fResult;
  } catch (e) {
    console.log(e);
  }
};

Promise.all([addEm(), addEm(), addEm()]);

addEm().then(result => {
  console.log("Awaited! Done!", result);
});
