//your JS code here. If required.
const outputDiv = document.getElementById("output");

// Initial Promise (3 sec delay)
function getArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Start chaining
getArray()
  .then((arr) => {
    // Step 1: Filter even numbers
    const evenNumbers = arr.filter(num => num % 2 === 0);

    return new Promise((resolve) => {
      setTimeout(() => {
        outputDiv.textContent = evenNumbers.toString(); // "2,4"
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    // Step 2: Multiply by 2
    const doubled = evenNumbers.map(num => num * 2);

    return new Promise((resolve) => {
      setTimeout(() => {
        outputDiv.textContent = doubled.toString(); // "4,8"
        resolve(doubled);
      }, 2000);
    });
  })
  .catch((err) => {
    console.error(err);
  });