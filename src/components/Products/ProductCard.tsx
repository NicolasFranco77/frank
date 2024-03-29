import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function ProductCard({ data }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="300px"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      mb={4}
    >
      {data.isNew && (
        <Badge
          top={2}
          right={2}
          position="absolute"
          rounded="full"
          px="2"
          fontSize="0.8em"
          colorScheme="red"
        >
          New
        </Badge>
      )}
      {/* {data.isNew && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.200"
        />
      )} */}

      <Image
        src={data.imageURL}
        alt={`Picture of ${data.name}`}
        roundedTop="lg"
      />

      <Box p="6">
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Tooltip
            label="Add to cart"
            bg="white"
            placement={"top"}
            color={"gray.800"}
            fontSize={"1.2em"}
          >
            <chakra.a href={"#"} display={"flex"}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </chakra.a>
          </Tooltip>
          <Box
            fontSize="2xl"
            as="h4"
            lineHeight="tight"
            // isTruncated
          >
            ${data.price}
          </Box>
        </Flex>

        {/* <Box display="flex" alignItems="baseline">
         
        </Box>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
           
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            // isTruncated
          >
            ${data.price}
          </Box>
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
           <Box as="span" color={"gray.600"} fontSize="lg">
             $
            </Box> 
       <Tooltip
            label="Add to cart"
            bg="white"
            placement={"top"}
            color={"gray.800"}
            fontSize={"1.2em"}
          >
            <chakra.a href={"#"} display={"flex"}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </chakra.a>
          </Tooltip> 

            {data.price} *
          </Box>
          <Tooltip
            label="Add to cart"
            bg="white"
            placement={"top"}
            color={"gray.800"}
            fontSize={"1.2em"}
          >
            <chakra.a href={"#"} display={"flex"}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </chakra.a>
          </Tooltip>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
         
          
        </Flex> */}
      </Box>
    </Box>
  );
}

export default ProductCard;
