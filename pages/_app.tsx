// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../src/components/Navbar/Navbar";

import { Provider } from "react-redux";
import store from "../store/store";

import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//new video
import { useSelector, useDispatch } from "react-redux";

function MyApp({ Component, pageProps }) {
  // const [isAuth, setIsAuth] = useState(false);

  // useEffect(() => {
  //   onAuthStateChanged(firebaseAuth, (user) => {
  //     if (user && user.uid) {
  //       console.log(user);
  //       setIsAuth(true);
  //     } else {
  //       setIsAuth(false);
  //     }
  //   });
  // }, [setIsAuth]);

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
