import {
  Box,
  HStack,
  Text,
  Icon,
  Image,
  Link,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import React from "react";

const Navbar = () => {
  return (
    <>
      <HStack bgColor={"green.100"} py={"6"} px="4">
        <Box>
          <HStack>
            <Heading as={"h5"} size="md">
              Shiv Shankar
            </Heading>
            <Link>Projects</Link>
            <Link>Experience</Link>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <HStack>
            <MoonIcon />
            <Spacer />
            <Image
              borderRadius="50%"
              boxSize={"40px"}
              objectFit="cover"
              src="https://avatars.githubusercontent.com/u/65837544?v=4"
              alt="profile_pic"
            />
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export default Navbar;
