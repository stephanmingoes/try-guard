type TryGuardResult<T, E extends Error = Error> = [E | null, T | null];
type Callback<T, A extends any[]> = (...args: A) => T;
type CallbackPromise<T, A extends any[]> = (...args: A) => Promise<T>;

export function TryGuard<T, A extends any[] = any[], E extends Error = Error>(
  callback: Callback<T, A>,
  args: A
): TryGuardResult<T, E> {
  let data: T | null = null;
  let err: E | null = null;
  try {
    const res = callback(...args);
    data = res;
  } catch (e: any) {
    err = e;
  }
  return [err, data];
}

export async function TryGuardAsync<
  T,
  A extends any[] = any[],
  E extends Error = Error
>(callback: CallbackPromise<T, A>, args: A): Promise<TryGuardResult<T, E>> {
  let data: T | null = null;
  let err: E | null = null;
  try {
    const res = await callback(...args);
    data = res;
  } catch (e: any) {
    err = e;
  }
  return [err, data];
}
