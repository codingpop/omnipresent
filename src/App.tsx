import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Home />
      </Router>
    </ChakraProvider>
  );
};

export default App;
