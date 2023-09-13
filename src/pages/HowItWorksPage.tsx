import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import StaticPage from "../components/page/StaticPage";
import StaticPageSection from "../components/page/StaticPageSection";
import CreateAccount from "../assets/create-account.svg";
import Checklist from "../assets/checklist.svg";
import Student from "../assets/student.svg";
import SendEmailToAdmin from "../util/email-mailto-util";

const HowItWorksPage = () => {
  return (
    <StaticPage>
      <StaticPageSection bgColor={"gray.50"} width="100%" py={12}>
        <Box mx="auto" px={12} maxW="5xl">
          <Heading
            size="xl"
            fontWeight="bold"
            textAlign="center"
            mb={12}
            color="gray.700"
          >
            How it works
          </Heading>
          <Flex
            direction={{
              base: "column",
              md: "row",
            }}
            justify="center"
            align="center"
          >
            <Image src={CreateAccount} alt="Create Account" boxSize={300} />
            <Flex direction="column" ml={{ base: "0", md: "12" }} gap={4}>
              <Heading>1. Create your account</Heading>
              <Heading size="md" textAlign="left" color="gray.500">
                Sign up for free and continue through the onboarding process.
              </Heading>
              <Flex
                justify={{
                  base: "center",
                  md: "flex-start",
                }}
              >
                <Button colorScheme="blue" size="lg" onClick={SendEmailToAdmin}>
                  Create Account
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </StaticPageSection>
      <StaticPageSection bgColor={"blue.50"} width="100%" py={12}>
        <Flex
          mx="auto"
          px={12}
          direction={{
            base: "column",
            md: "row",
          }}
          justify="center"
          align="center"
          maxW="5xl"
        >
          <Flex direction="column" ml={{ base: "0", md: "12" }} gap={4}>
            <Heading>2. Complete the onboarding process</Heading>
            <Heading size="md" textAlign="left" color="gray.500">
              Complete the onboarding process by providing your information and
              verifying your experience.
            </Heading>
          </Flex>
          <Image src={Checklist} alt="Checklist" boxSize={300} />
        </Flex>
      </StaticPageSection>
      <StaticPageSection bgColor={"gray.50"} width="100%" py={12}>
        <Flex
          mx="auto"
          px={12}
          direction={{
            base: "column",
            md: "row",
          }}
          justify="center"
          align="center"
          maxW="5xl"
        >
          <Image src={Student} alt="Student" boxSize={300} />
          <Flex direction="column" ml={{ base: "0", md: "12" }} gap={4}>
            <Heading>3. Start tutoring students</Heading>
            <Heading size="md" textAlign="left" color="gray.500">
              You will receive a message whenever a student requires assistance
              within your designated availability timeframe.
            </Heading>
            <Flex
              justify={{
                base: "center",
                md: "flex-start",
              }}
            >
              <Button
                colorScheme="blue"
                size="lg"
                variant="outline"
                onClick={SendEmailToAdmin}
              >
                Get Started
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </StaticPageSection>
    </StaticPage>
  );
};

export default HowItWorksPage;
