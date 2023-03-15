# TryGuard and TryGuardAsync

The `TryGuard` and `TryGuardAsync` functions are utility functions for handling synchronous and asynchronous operations that may throw an error. These functions catch any errors thrown by a provided function and return a tuple that contains either the result of the function or `null`, as well as either the error thrown by the function or `null`.

The `TryGuard` function is used for synchronous operations, while `TryGuardAsync` is used for asynchronous operations that return a promise.

## Usage

Both functions take a callback function and an array of arguments to be passed to the callback. The array is type-safe, meaning that TypeScript ensures that the correct types of arguments are passed to the callback function. This guarantees that you don't have to worry about passing incorrect arguments to the array, which can save you valuable time and effort in debugging your code.

Here's an example of how to use the `TryGuard` and `TryGuardAsync` functions:

```typescript
import { TryGuard, TryGuardAsync } from "try-guard";

function divideByZero(n: number) {
  return n / 0;
}

const [err, data] = TryGuard(divideByZero, [5]);

console.log(err); // Output: Error: Division by zero
console.log(data); // Output: null

async function fetchData() {
  const response = await fetch("https://example.com");
  return response.json();
}

const [asyncErr, asyncData] = await TryGuardAsync(fetchData, []);

console.log(asyncErr); // Output: null
console.log(asyncData); // Output: the parsed JSON data from the response
```

In the example above, `TryGuard` is used to handle a synchronous operation that throws an error, while `TryGuardAsync` is used to handle an asynchronous operation that returns a promise. Both functions return a tuple that contains either the result of the function or `null`, as well as either the error thrown by the function or `null`.
