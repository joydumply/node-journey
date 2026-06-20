// Task 1

console.log('a'); // 1
console.log('b'); // 2
console.log('c'); // 3


// Task 2

console.log('a'); // 1
setTimeout(() => console.log('b'), 0); // 3
console.log('c'); //2 

// Task 3

console.log('a'); // 1
Promise.resolve().then(() => console.log('b')); // 3
console.log('c'); // 2  

// Task 4

console.log('a'); //1 
setTimeout(() => console.log('b'), 0); //4 
Promise.resolve().then(() => console.log('c')); //3 
console.log('d'); //2 

// Task 5

console.log('a');//1
process.nextTick(() => console.log('b'));//3
Promise.resolve().then(() => console.log('c'));//4
console.log('d');//2

// Task 6

Promise.resolve().then(() => console.log('a')); //2
Promise.resolve().then(() => console.log('b')); //3 
Promise.resolve().then(() => console.log('c')); //4
console.log('d'); //1

// Task 7

setTimeout(() => console.log('a'), 0);//2
setTimeout(() => console.log('b'), 0);//3
console.log('c'); //1

// Task 8

console.log('a'); //1

async function foo() {
  console.log('b'); //2
  await null;
  console.log('c');//4
}

foo();
console.log('d'); //3

// Task 9

console.log('a');//1
setTimeout(() => console.log('b'), 0);//5

Promise.resolve()
  .then(() => {
    console.log('c');//3
    return Promise.resolve();
  })
  .then(() => console.log('d'));//4

console.log('e'); //2

// Task 10

console.log('a');//1

setTimeout(() => {
  console.log('b');//7
  process.nextTick(() => console.log('c'));//8
}, 0);

Promise.resolve().then(() => console.log('d'));//5

process.nextTick(() => console.log('e'));//4

async function foo() {
  console.log('f');//2
  await Promise.resolve();
  console.log('g');//6
}
foo();

console.log('h');//3