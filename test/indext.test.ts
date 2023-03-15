import { expect, it } from "vitest";
import { TryGuard, TryGuardAsync } from "../src";

it("tryguard should handle synchronous operations successfully", () => {
  function splitter(str: string) {
    return str.split(" ");
  }
  const [err, data] = TryGuard(splitter, ["test"]);

  expect(err).toBe(null);
  expect(Array.isArray(data)).toBe(true);
});

it("tryguard should handle asynchronous operations successfully ", async () => {
  async function gettSme(endpoint: string) {
    const response = await fetch(endpoint);
    return response.json();
  }
  const [err, data] = await TryGuardAsync(gettSme, [
    "https://jsonplaceholder.typicode.com/posts",
  ]);

  expect(err).toBe(null);
  expect(Array.isArray(data)).toBe(true);
});
it("tryguard should handle errors successfully ", async () => {
  async function gettSme() {
    throw new Error("Something went wrong");
  }
  const [err, data] = await TryGuardAsync(gettSme, []);

  expect(err !== null).toBe(true);
  expect(data == null).toBe(true);
});
