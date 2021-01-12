/**
 * A wrapper for the fetch api. It maintains the almost the same api
 * as the fetch api with a little bit of error handling.
 * @param input
 * @param init
 */
async function request<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const response = await fetch(input, init);
  const data = await response.json();

  if (response.status >= 400) {
    throw new Error(data.message || "Unknown error!");
  }

  return data;
}

export default request;
