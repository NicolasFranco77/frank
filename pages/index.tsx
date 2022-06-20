import type { NextPage } from "next";

//components
import Carousel from "../src/components/Carousel/Carousel";
import ProductsList from "../src/components/Products/ProductsList";
import Footer from "../src/components/Footer/Footer";

import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setHola } from "../store/slices/authSlice";

const Home: NextPage = () => {

  const hola = useSelector(state => state.auth.hola);
  const dispatch = useDispatch()

  console.log(hola)


  return (
    <>
      <Carousel />
     
      <Grid templateColumns="15%  85%" py={10}>
        <GridItem ml={3} mr={3} border={"1px"}></GridItem>
        <GridItem>
          <ProductsList />
        </GridItem>
      </Grid>
      <Footer />
      <button onClick={() => dispatch(setHola())}>CLICK ME</button>
    </>
  );
};

export default Home;
