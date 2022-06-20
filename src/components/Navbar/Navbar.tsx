import Link from "next/link";
import { useRef } from "react";

//components
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktoNav";
import CartCard from "../Cart/CartCard";

//libraries
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

//data
import { NAV_ITEMS } from "./data";

export default function Navbar() {
  const { isOpen: isOpenMenu, onToggle: onToggleMenu } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

  return (
    <>
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          position={"absolute"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          justify={"space-between"}
          zIndex={10}
          width="100%"
        >
          <Flex display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggleMenu}
              icon={
                isOpenMenu ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          {/*Logo  */}
          <Flex justify={{ base: "start", md: "start" }}>
            <Link href="/">
              <Text
                cursor={"pointer"}
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                color={useColorModeValue("gray.800", "white")}
              >
                F R A N K
              </Text>
            </Link>
          </Flex>

          {/* Desktop Navbar */}
          <Flex display={{ base: "none", md: "flex" }} justify="center">
            <DesktopNav NAV_ITEMS={NAV_ITEMS} />
          </Flex>

          <Stack justify={"flex-end"} direction={"row"} spacing={6}>
            {/* Search */}
            <Flex display={{ base: "none", md: "flex" }} align="center">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon />}
                />
                <Input placeholder="Search..." />
              </InputGroup>
            </Flex>

            {/* Cart Icon */}
            <IconButton
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
              icon={<FaShoppingCart />}
              size="lg"
              ref={btnRef}
              onClick={onOpen}
            />

            {/* UserIcon */}
            <Link href="/login">
              <IconButton
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
                icon={<FaUserAlt />}
                size="lg"
              />
            </Link>
          </Stack>
        </Flex>

        {/* Mobile Navbar */}
        <Collapse in={isOpenMenu} animateOpacity>
          <MobileNav items={NAV_ITEMS} />
        </Collapse>
      </Box>

      {/* Mobile Search */}
      <Flex display={{ base: "flex", md: "none" }}>
        <form style={{ width: "100%" }}>
          <InputGroup width="full">
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input placeholder="Search..." />
          </InputGroup>
        </form>
      </Flex>

      {/* Cart */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            <CartCard />
            <CartCard />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
