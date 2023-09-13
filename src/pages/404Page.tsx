import { Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const FourOhFourPage = () => {
  const navigate = useNavigate();
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      flex="1"
      gap={6}
      mb={{
        base: "12",
        lg: "36",
      }}
    >
      <Heading size="4xl" fontWeight="normal" textAlign="center">
        404
      </Heading>
      <Heading size="sm" fontWeight="normal" textAlign="center">
        Oops! We couldn't find that page.
      </Heading>
      <Button colorScheme="blue" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </Flex>
  );
};

export default FourOhFourPage;
