import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { renderHook, RenderHookOptions } from "@testing-library/react-hooks";
import { MemoryRouter } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

const AllProviders = ({ children }: { children?: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export const HooksProvider = ({ children }: { children?: React.ReactNode }) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

function customRenderHook<T>(
  callback: (props: unknown) => T,
  options?: RenderHookOptions<unknown>
) {
  return renderHook(callback, { wrapper: HooksProvider, ...options });
}

export { customRender as render };
export { customRenderHook as renderHook };
