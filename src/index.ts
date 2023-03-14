type CallbackFunction = (...args: any[]) => any;

export function TryGuard(callback: CallbackFunction, ...args: any[]) {
  let data = null;
  let err = null;
  try {
    const res = callback(...args);
    data = res;
  } catch (e) {
    err = e;
  }
  return [err, data];
}

export async function TryGuardAsync(
  callback: CallbackFunction,
  ...args: any[]
) {
  let data = null;
  let err = null;
  try {
    const res = await callback(...args);
    data = res;
  } catch (e) {
    err = e;
  }
  return [err, data];
}
