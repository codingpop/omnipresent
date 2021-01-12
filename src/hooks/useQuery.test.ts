import { renderHook } from "../test-utils";
import useQuery from "./useQuery";

test("useQuery", () => {
  const { result } = renderHook(() => useQuery());
  expect(result.current.queryString).toBe("");
  result.current.pushQuery({
    q: "is:online",
  });
  expect(result.current.queryString).toBe("?q=is%3Aonline");
  result.current.pushQuery({
    page: 2,
  });
  expect(result.current.queryString).toBe("?page=2&q=is%3Aonline");
});
