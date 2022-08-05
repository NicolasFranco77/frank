import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { removeItem } from "../../features/cartSlice";

export default function CartCard({ imageURL, name, price, id }) {
  const dispatch = useDispatch();

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${imageURL})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={imageURL}
            alt={name}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Button
            variant="outline"
            size="xs"
            onClick={() => dispatch(removeItem(id))}
          >
            Remove
          </Button>

          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              {price}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
