import { expect, it } from "vitest";
import { TryGuard, TryGuardAsync } from "../src";

it("tryguard should handle error", () => {
  const [err, data] = TryGuard((str: string) => str.split(" "), 1);
  expect(err !== null).toBe(true);
  expect(data).toBe(null);
});

it("tryguard should handle synchronous operations successfully", () => {
  const [err, data] = TryGuard((str: string) => str.split(" "), "test");
  expect(err).toBe(null);
  expect(Array.isArray(data)).toBe(true);
});

it("tryguard should handle asynchronous operations successfully ", async () => {
  const [err, data] = await TryGuardAsync(async (endpoint: string) => {
    const response = await fetch(endpoint);
    return response.json();
  }, "https://jsonplaceholder.typicode.com/posts");

  expect(err).toBe(null);
  expect(Array.isArray(data)).toBe(true);
});
