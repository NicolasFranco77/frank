import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../src/components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "../src/store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
