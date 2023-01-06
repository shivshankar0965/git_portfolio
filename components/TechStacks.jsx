import { Box, Text } from "@chakra-ui/react";
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
const TechStacks = () => {
  return (
    <>
      <Box
        justifyContent={"left"}
        lineHeight={"40px"}
        p={"4"}
        shadow={"md"}
        width="100%"
      >
        {skills.map((skill, i) => (
          <Text p={"1"} mr={"5px"} bgColor={"green.200"} key={i} as={"span"}>
            {`${skill}`}
          </Text>
        ))}
      </Box>
    </>
  );
};

export default TechStacks;
