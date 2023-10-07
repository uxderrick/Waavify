import { Heading, Text, Flex, Box, Button, Container } from "@radix-ui/themes";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <Box
        py="9"
        style={{
          backgroundColor: "var(--zinc-900, #18181B)",
          color: "white",
        }}
      >
        <Flex direction="column" gap="9" align={"center"}>
          {/* logo */}
          <img src="src/assets/logo.svg" height={40}></img>

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
              What are you up <br></br> to on Spotify?
            </Heading>
            <Text size="4" align={"center"}>
              Connect your Spotify Account to learn more about your <br></br>
              all-time Spotify user activity
            </Text>
            <Flex className="button">
              <Button variant="solid" size="4">
                Connect my Spotify
              </Button>
            </Flex>
            <Container></Container>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default LandingPage;
