import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Link,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
// import Image from "next/image";
import NextLink from "next/link";
import React from "react";
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "NextJS",
  "ChakaraUI",
  "React",
  "Node",
  "Github",
];
const Profile = ({ data }) => {
  return (
    <>
      <VStack p={"4"} width="100%" borderRadius="md" shadow="md">
        <Box pos={"relative"}>
          <Image boxSize="100" borderRadius="50%" src={data.avatar_url} />
          <Icon
            pos={"absolute"}
            right="3"
            bottom={"1"}
            viewBox="0 0 200 200"
            color="green.500"
          >
            <path
              fill="currentColor"
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            />
          </Icon>
        </Box>
        <Heading as={"h4"} size="lg">
          {data.name}
        </Heading>
        <Link as={NextLink} href={data.html_url}>
          {data.login}
        </Link>
        <Box>
          {skills.map((skill, i) => (
            <Text as={"span"} key={i}>
              {i === skills.length - 1 ? `${skill}` : `${skill} | `}
            </Text>
          ))}
        </Box>
        <Spacer />
        <HStack>
          <Button px="50px" colorScheme="green" borderRadius={"200px"}>
            Resume
          </Button>
          <Button px="50px" colorScheme="blue" borderRadius={"200px"}>
            Follow
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export default Profile;
