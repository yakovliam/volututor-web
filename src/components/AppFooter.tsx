import { Button, Flex, Heading, Link } from "@chakra-ui/react";
import SendEmailToAdmin from "../util/email-mailto-util";

const AppFooter = () => {
  return (
    <Flex bg="gray.700" color="white" justifyContent="center">
      <Flex
        direction={"column"}
        maxW="7xl"
        py={{ base: "10", lg: "12" }}
        px={{ base: "12" }}
        flex="1"
        gap={12}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent={{
            base: "center",
            lg: "space-between",
          }}
          alignItems={{ base: "center", lg: "flex-start" }}
          gap={12}
          textAlign="center"
        >
          <Flex direction={"column"} gap={5}>
            <Heading
              fontSize="xl"
              fontWeight="bold"
              textTransform="uppercase"
              textAlign="center"
            >
              Learn More
            </Heading>
            <Link href="/how-it-works">How it Works</Link>
            <Link onClick={SendEmailToAdmin} isExternal={true}>
              FAQ
            </Link>
          </Flex>
          <Flex
            direction={"column"}
            gap={5}
            textAlign="center"
            justifyContent="center"
          >
            {/* all caps */}
            <Heading
              fontSize="xl"
              fontWeight={"bold"}
              textTransform="uppercase"
              textAlign="center"
            >
              About Us
            </Heading>
            <Link onClick={SendEmailToAdmin} isExternal={true}>
              Our Mission
            </Link>
            <Link onClick={SendEmailToAdmin} isExternal={true}>
              Our Team
            </Link>
          </Flex>
          <Flex direction={"column"} gap={5}>
            <Heading
              fontSize="xl"
              fontWeight={"bold"}
              textTransform="uppercase"
              textAlign="center"
            >
              Contact Us
            </Heading>
            <Link onClick={SendEmailToAdmin} isExternal={true}>
              Email
            </Link>
          </Flex>
          <Flex direction={"column"} gap={5}>
            <Heading
              fontSize="xl"
              fontWeight={"bold"}
              textTransform="uppercase"
              textAlign="center"
            >
              Stay Connected
            </Heading>

            <Button
              colorScheme="whatsapp"
              variant="solid"
              onClick={SendEmailToAdmin}
            >
              Subscribe to Newsletter
            </Button>
          </Flex>
        </Flex>

        <Flex flex="1" justifyContent="center" py={5}>
          <Heading fontSize="md" fontWeight={"light"} color="gray.400">
            &copy; {new Date().getFullYear()} Volututor. All rights reserved.
            An <Link href="https://upchieve.org/">UPchieve</Link> company.
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AppFooter;
