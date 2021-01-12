import { renderHook } from "../test-utils";
import useSearch from "./useSearch";

test("useSearch", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useSearch());
  expect(result.current.loading).toBeTruthy();

  await waitForNextUpdate();
  expect(result.current.loading).toBeFalsy();
  expect(result.current.result.total_count).toBeGreaterThan(1);
});
