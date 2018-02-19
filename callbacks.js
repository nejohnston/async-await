function mockAsync(data, done) {
  setTimeout(() => {
    done(`Im done processing this IO ${data}`);
  }, 2000);
}

// Basic Callback Pattern
