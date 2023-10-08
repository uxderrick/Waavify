import {
  Heading,
  Text,
  Flex,
  Box,
  Button,
  Container,
  Em,
} from "@radix-ui/themes";
import React from "react";

const LandingPage = () => {
  //
  // navigation

  //
  return (
    <>
      <Box className="big-box">
        <Box
          py="1"
          style={{
            backgroundColor: "var(--zinc-900, #18181B)",
            color: "white",
          }}
        >
          <Flex direction="column" gap="9" align={"center"}>
            {/* logo */}
            <img
              className="container"
              src="https://raw.githubusercontent.com/uxderrick/Waavify/8cd10ca0d56640d6e309d45504ea3cc9c2567386/src/assets/logo.svg"
              height={40}
            ></img>

            {/* Title block */}
            <Flex direction="column" gap="5" width={8} align={"center"}>
              <Heading
                align={"center"}
                size={{
                  initial: "9",
                  md: "9",
                  sm: "9",
                  xl: "9",
                }}
              >
                What are you up to on <Em> Spotify</Em>?
              </Heading>
              <Text size="4" align={"center"}>
                Connect your Spotify Account to learn more about your all-time
                Spotify user activity
              </Text>
              <Flex className="button">
                <Button variant="solid" size="4">
                  Connect my Spotify
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box className="image-container"></Box>
      </Box>
    </>
  );
};

export default LandingPage;
