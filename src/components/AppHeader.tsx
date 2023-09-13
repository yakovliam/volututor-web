import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import VolututorLogo from "../assets/volututor-cropped-dark.svg";
import { Image } from "@chakra-ui/react";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import SendEmailToAdmin from "../util/email-mailto-util";

const AppHeader = () => {
  const size = useBreakpointValue({ base: "mobile", md: "desktop" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Flex
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      py={{ base: "10", lg: "12" }}
      maxW="7xl"
      mx="auto"
      px={{ base: "12" }}
    >
      <Box>
        <Link to="/">
          <Image
            src={VolututorLogo}
            alt="Volututor Logo"
            height={25}
            objectFit="cover"
          />
        </Link>
      </Box>
      {size === "desktop" && <ActionsDesktop />}
      {size === "mobile" && (
        <Flex direction={"row"} gap={5}>
          <IconButton
            colorScheme="blue"
            variant="ghost"
            onClick={onOpen}
            ref={btnRef}
            icon={<FaBars />}
            aria-label="Open Menu"
            size="lg"
          />
        </Flex>
      )}

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <ActionsMobile />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

const ActionsMobile = () => {
  return (
    <Flex direction={"column"} gap={5} my={50}>
      <Button colorScheme="blue" variant="ghost" onClick={SendEmailToAdmin}>
        About
      </Button>

      <Button colorScheme="blue" variant="ghost" onClick={SendEmailToAdmin}>
        Volunteer
      </Button>

      <Button colorScheme="blue" variant="ghost" onClick={SendEmailToAdmin}>
        Donate
      </Button>

      <Button colorScheme="blue" variant="ghost" onClick={SendEmailToAdmin}>
        Contact
      </Button>

      <Button
        colorScheme="blue"
        variant="solid"
        onClick={() => {
          window.open("https://app.upchieve.org/login");
        }}
      >
        Login
      </Button>

      <Button colorScheme="blue" variant="outline" onClick={SendEmailToAdmin}>
        Sign Up
      </Button>
    </Flex>
  );
};

const ActionsDesktop = () => {
  return (
    <Flex direction={"row"} gap={5}>
      <Button colorScheme="blue" variant="ghost" onClick={SendEmailToAdmin}>
        About
      </Button>

      <Button colorScheme="blue" variant="ghost" onClick={SendEmailToAdmin}>
        Volunteer
      </Button>

      <Button colorScheme="blue" variant="ghost" onClick={SendEmailToAdmin}>
        Donate
      </Button>

      <Button colorScheme="blue" variant="ghost" onClick={SendEmailToAdmin}>
        Contact
      </Button>

      <Button
        colorScheme="blue"
        variant="solid"
        onClick={() => {
          window.open("https://app.upchieve.org/login");
        }}
      >
        Login
      </Button>

      <Button colorScheme="blue" variant="outline" onClick={SendEmailToAdmin}>
        Sign Up
      </Button>
    </Flex>
  );
};

export default AppHeader;
