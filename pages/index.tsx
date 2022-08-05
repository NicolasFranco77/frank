import type { NextPage } from "next";

//components
import Carousel from "../src/components/Carousel/Carousel";
import ProductsList from "../src/components/Products/ProductsList";
import Footer from "../src/components/Footer/Footer";

import { Grid, GridItem, Button } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Carousel />

      <Grid py={10}>
        <ProductsList />
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
