import React from "react";
import {data} from "./data"
import ProductCard from "./ProductCard";

import { SimpleGrid } from "@chakra-ui/react";



const ProductsList = () => {
  return (
    <SimpleGrid
      columns={4}
      spacing={2}
      minChildWidth="300px"
      justifyItems={"center"}
    >
      {/* <ProductCard /> */}

      {data.map((product, i) => (
        <ProductCard key={i} data={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductsList;
