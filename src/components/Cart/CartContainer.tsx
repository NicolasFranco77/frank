import { useRef } from "react";

//components
import CartCard from "./CartCard";

//redux
import { useSelector } from "react-redux";

//libraries
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const CartContainer = ({ isOpen, onClose }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const btnRef = useRef();

  return (
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
          {cartItems.map((product) => (
            <CartCard key={product.id} {...product} />
          ))}
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartContainer;
