import React from "react";
import {
  Heading,
  Text,
  Flex,
  Box,
  Button,
  Container,
  Em,
  Avatar,
} from "@radix-ui/themes";
import DetailsCard from "../components/DetailsCard";
import MusicCard from "../components/MusicCard";

const DetailsPage = () => {
  return (
    <>
      <Box
        // width="100%"
        py="1"
        style={{
          //   backgroundColor: "var(--zinc-900, #18181B)",
          color: "white",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <Flex direction="column" gap="9" align="start" width="100%">
          {/* logo */}
          <img
            className="container"
            src="https://raw.githubusercontent.com/uxderrick/Waavify/8cd10ca0d56640d6e309d45504ea3cc9c2567386/src/assets/logo.svg"
            height={40}
          ></img>
          <Flex direction="column" gap="6">
            <Flex direction="column" gap="3" align="start">
              <Flex gap="2">
                <Avatar
                  variant="solid"
                  size="2"
                  radius="full"
                  fallback="A"
                ></Avatar>
                <Text
                  size={{
                    initial: "7",
                    md: "7",
                    sm: "7",
                    xl: "7",
                  }}
                >
                  Derrick
                </Text>
              </Flex>
              <Text as="p" size="2" className="small-text">
                Find below your lifetime Spotify behaviour
              </Text>
            </Flex>
            <Flex gap="6" wrap="wrap">
              <DetailsCard></DetailsCard>
              <DetailsCard></DetailsCard>
            </Flex>
          </Flex>

          {/* Top tracks */}
          <Flex direction="column" gap="4" width="100%">
            <Flex direction="column" gap="3" align="start">
              <Flex gap="2">
                <Text size="4" weight="bold">
                  My top songs
                </Text>
              </Flex>
            </Flex>
            <Flex gap="6" wrap="wrap" width="100%">
              <MusicCard></MusicCard>
              <MusicCard></MusicCard>
              <MusicCard></MusicCard>
              <MusicCard></MusicCard>
              <MusicCard></MusicCard>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default DetailsPage;
