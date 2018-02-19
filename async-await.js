function mockAsyncSlowAdder(number1, number2) {
    return new Promise((resolve, reject) => {
      console.log("Slowly adding...", number1, "+", number2);
  
      setTimeout(() => {
        const added = number1 + number2;
        if (!added) return reject("invalid addition..")
        resolve(added);
      }, 2000);
    });
  }

  
  try {
    const result1 = await mockAsyncSlowAdder(1, 2)
    const result2 = await mockAsyncSlowAdder(1, result1)
    const result3 = await mockAsyncSlowAdder(1, result2)
  } catch(e) {
      console.log(e)
  }


  console.log('Awaited! Done!', finalResult)