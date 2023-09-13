import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  ListItem,
  Skeleton,
  Stack,
  Text,
  UnorderedList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Tutor1 from "../assets/tutor1.jpg";
import Tutor2 from "../assets/tutor2.jpg";
import Teacher from "../assets/teacher.jpg";
import StaticPage from "../components/page/StaticPage";
import StaticPageSection from "../components/page/StaticPageSection";
import SendEmailToAdmin from "../util/email-mailto-util";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const size = useBreakpointValue({ base: "base", lg: "lg" });
  const navigate = useNavigate();
  return (
    <StaticPage bgColor={"gray.50"}>
      <StaticPageSection
        maxW="7xl"
        mx="auto"
        px={{ base: "0", lg: "12" }}
        py={{ base: "0", lg: "12" }}
      >
        <Stack
          direction={{ base: "column-reverse", lg: "row" }}
          spacing={{ base: "0", lg: "20" }}
        >
          <Box
            width={{ lg: "sm" }}
            transform={{ base: "translateY(-50%)", lg: "none" }}
            bg={{
              base: "gray.700",
              lg: "transparent",
            }}
            mx={{ base: "6", md: "8", lg: "0" }}
            px={{ base: "6", md: "8", lg: "0" }}
            py={{ base: "6", md: "8", lg: "12" }}
          >
            <Stack spacing={{ base: "8", lg: "10" }}>
              <Stack spacing={{ base: "2", lg: "4" }}>
                <Heading size="xl" fontWeight="normal">
                  Assist low-income students on their path to college
                </Heading>
              </Stack>
              <HStack spacing="3">
                <Link
                  color={"blue.300"}
                  fontWeight="bold"
                  fontSize="lg"
                  onClick={() => {
                    navigate("/how-it-works");
                  }}
                >
                  Volunteer to Tutor
                </Link>
                <Icon color={"blue.300"} as={FaArrowRight} />
              </HStack>
            </Stack>
          </Box>
          <Flex flex="1" overflow="hidden">
            <Image
              src={Tutor1}
              alt="Online Tutor #1"
              fallback={<Skeleton />}
              maxH="450px"
              minW="300px"
              objectFit="cover"
              flex="1"
            />
            <Image
              display={{ base: "none", sm: "initial" }}
              src={Tutor2}
              alt="Online Tutor #2"
              fallback={<Skeleton />}
              maxH="450px"
              objectFit="cover"
            />
          </Flex>
        </Stack>
      </StaticPageSection>
      <StaticPageSection width={"100%"}>
        <Flex
          position={"relative"}
          justify="center"
          bgColor={{
            base: "gray.100",
            lg: "",
          }}
        >
          {size === "lg" ? (
            <Image
              src={Teacher}
              alt="Teacher"
              objectFit="cover"
              opacity="0.2"
              height={{
                base: "100%",
                sm: "lg",
                xl: "100%",
              }}
            />
          ) : (
            <></>
          )}
          <Flex
            position={{
              base: "relative",
              lg: "absolute",
            }}
            px={12}
            py={12}
            textAlign="left"
            direction="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              gap={6}
              direction="column"
              maxW="3xl"
              py={100}
            >
              <Heading size="xl" fontWeight="bold" color="gray.700">
                There are{" "}
                <Box as="span" color="red.300" fontWeight="bold" fontSize="4xl">
                  8 million+
                </Box>{" "}
                low-income students in the U.S.
              </Heading>
              <Text fontSize="xl" color="gray.700">
                The majority of these students are unable to afford or don't
                have the means to access private tutoring, which starts at $20
                per hour and can even exceed $100 per hour for certain subjects.
              </Text>
              <Text fontSize="xl" color="gray.700">
                Through Volututor, you can engage in direct collaboration with
                these students, aiding them in conquering their academic
                challenges via personalized online tutoring and guidance for
                college preparation.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </StaticPageSection>
      <StaticPageSection>
        <Flex position="relative" flex="1" overflow="hidden" justify="center">
          <Flex
            maxW="4xl"
            px={{ base: "12" }}
            py={{ base: "12" }}
            height={{ base: "100%" }}
            textAlign="left"
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={12}
          >
            <Heading size="xl" fontWeight="bold" color="gray.700">
              Why volunteer with Volututor?
            </Heading>
            <Flex
              direction={{
                base: "column",
                md: "row",
              }}
              gap={12}
            >
              <Flex direction={"column"} alignItems={"center"} gap={4}>
                <Heading
                  size="md"
                  fontWeight="bold"
                  color="gray.500"
                  textTransform={"uppercase"}
                >
                  Flexibility
                </Heading>
                <UnorderedList textAlign="left">
                  <ListItem>
                    Exercise full control over your online volunteering
                    timetable.
                  </ListItem>
                  <ListItem>
                    Choose your preferred slots from a round-the-clock calendar
                    and modify them whenever necessary.
                  </ListItem>
                  <ListItem>
                    Being a volunteer tutor with Volututor does not require any
                    minimum time commitment.
                  </ListItem>
                </UnorderedList>
              </Flex>
              <Flex direction={"column"} alignItems={"center"} gap={4}>
                <Heading
                  size="md"
                  fontWeight="bold"
                  color="gray.500"
                  textTransform={"uppercase"}
                >
                  Impact
                </Heading>
                <UnorderedList textAlign="left">
                  <ListItem>
                    Help low-income students overcome their academic challenges
                    and prepare for college.
                  </ListItem>
                  <ListItem>
                    Make a difference in the lives of students who are unable to
                    afford private tutoring.
                  </ListItem>
                  <ListItem>
                    Provide students with the resources and guidance they need
                    to succeed.
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </StaticPageSection>
    </StaticPage>
  );
};

export default HomePage;
