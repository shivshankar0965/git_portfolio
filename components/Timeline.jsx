import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
const timeLine = [
  {
    id: 1,
    position: "Student",
    organisation: "Masai School",
    place: "Bengalore",
    start: "May 2022",
    end: "Present",
  },
  {
    id: 2,
    position: "Student",
    organisation: "LNJPIT",
    place: "Chapra",
    start: "Aug 2017",
    end: "Oct 2021",
  },
  {
    id: 3,
    position: "Service Desk Engineer",
    organisation: "HCL Ltd.",
    place: "Noida",
    start: "jan 2022",
    end: "Apl 2022",
  },
];
const Timeline = () => {
  return (
    <>
      <VStack
        display={"flex"}
        alignItems="left"
        width="100%"
        p={"4"}
        shadow="md"
      >
        {timeLine.map((tline) => (
          <HStack
            key={tline.id}
            display="flex"
            justifyContent={"start"}
            align="start"
          >
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              borderRadius="50%"
              boxSize={"35px"}
              background={tline.id === 1 ? "gray.500" : "gray.100"}
            >
              {tline.id}
            </Box>
            <VStack display={"flex"} alignItems="left">
              <Heading as={"h4"} size="sm">
                {tline.position} at {tline.organisation}
              </Heading>
              <Text fontSize={"12px"} color="gray.600">
                {tline.start} - {tline.end}
              </Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default Timeline;
