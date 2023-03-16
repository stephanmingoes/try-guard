type TryGuardResult<ReturnData, ErrorType extends Error = Error> = [
  ErrorType | null,
  ReturnData | null
];
type Callback<ReturnData, Arguments extends any[]> = (
  ...args: Arguments
) => ReturnData;
type CallbackPromise<ReturnData, Arguments extends any[]> = (
  ...args: Arguments
) => Promise<ReturnData>;

export function TryGuard<
  ReturnData,
  Arguments extends any[],
  ErrorType extends Error = Error
>(
  callback: Callback<ReturnData, Arguments>,
  args: Arguments
): TryGuardResult<ReturnData, ErrorType> {
  let data: ReturnData | null = null;
  let err: ErrorType | null = null;
  try {
    const res = callback(...args);
    data = res;
  } catch (e: any) {
    err = e;
  }
  return [err, data];
}

export async function TryGuardAsync<
  ReturnData,
  Arguments extends any[],
  ErrorType extends Error = Error
>(
  callback: CallbackPromise<ReturnData, Arguments>,
  args: Arguments
): Promise<TryGuardResult<ReturnData, ErrorType>> {
  let data: ReturnData | null = null;
  let err: ErrorType | null = null;
  try {
    const res = await callback(...args);
    data = res;
  } catch (e: any) {
    err = e;
  }
  return [err, data];
}
