import type { NextPage } from "next";

//components
import Carousel from "../src/components/Carousel/Carousel";
import ProductsList from "../src/components/Products/ProductsList";
import Footer from "../src/components/Footer/Footer";

import { Grid, GridItem, Button } from "@chakra-ui/react";

import { auth, provider } from "../firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { setActiveUser, setUserLogOutState } from "../store/slices/userSlice";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateCurrentUser,
} from "firebase/auth";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const userName = useSelector((store) => store.user.userName);
  const userEmail = useSelector((store) => store.user.userEmail);
const [token, setToken] = useState(null)
  

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        dispatch(
          setActiveUser({
            userName: result.user.displayName,
            userEmail: result.user.email,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setToken(currentUser.displayName)
        console.log("hay usuario conectado")
      }else{
        setToken(null)
        console.log("Nadie conectado mi rey")
      }
    });

  }, [setToken])
  

  

  return (
    <>
      <Carousel />
      {token ? (
        <Button onClick={() => signOut(auth)}>Log Out</Button>
      ) : (
        <Button onClick={handleSingIn}>Log in</Button>
      )}
      <Grid templateColumns="15%  85%" py={10}>
        <GridItem ml={3} mr={3} border={"1px"}></GridItem>
        <GridItem>
          <ProductsList />
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
