import { Heading, Text, Flex, Box, Button, Em } from "@radix-ui/themes";
import React, { useEffect } from "react";

const LandingPage = () => {
  //for development - comment out for production
  // const CLIENT_ID = "cbc5c4992145444bb0094dc2d4668427";
  // const REDIRECT_URI = "http://localhost:5173/dashboard";
  //

  // for production - comment out for development
  const CLIENT_ID = "0ffb874804fc49c0baa0d035ae776dd4";
  const REDIRECT_URI = "https://waavify.vercel.app/dashboard";

  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPE = [
    "user-read-recently-played",
    "user-top-read",
    "user-read-email",
    "user-read-private",
  ];

  // handle button click
  const handleButtonClick = () => {
    const urlToOpen = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE.join(
      " "
    )}&show_dialog=true`;

    // open the spotify auth page
    window.location.href = urlToOpen;
  };

  useEffect(() => {}, []);

  //
  return (
    <div>
      <Box className="big-box landing-center-guy">
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
              <Text size="4" align="center">
                Connect your Spotify Account to learn more about your all-time
                Spotify user activity
              </Text>
              <Button variant="solid" size="4" onClick={handleButtonClick}>
                Connect my Spotify
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Box className="image-container"></Box>
      </Box>
    </div>
  );
};

export default LandingPage;
