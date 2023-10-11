import React, { useEffect, useState } from "react";
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
  const [token, setToken] = useState("");
  const [data, setSpotifyData] = useState({});

  //useEffect
  useEffect(() => {
    const hash = window.location.hash;

    //check if token is in local storage
    let token = window.localStorage.getItem("token");

    //if token is in local storage, set token state to that token
    if (!token && hash) {
      token = hash
        // Remove the # from the string
        .substring(1)
        // Transform the string into an object of strings
        .split("&")
        // Split each item of the object into an array
        .find((elem) => elem.startsWith("access_token"))
        // Get the first element of the array
        .split("=")[1];

      //remove token from url
      // window.location.hash = "";
      window.localStorage.setItem("token", token);
    } //else if token is not in local storage, redirect to spotify login page
    else if (!token) {
      window.location.href = "/";
    }

    //replace saved token with new token
    setToken(token);

    //fetch data from spotify api
    const fetchData = async () => {
      const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      console.log(data);

      //
      setSpotifyData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Box
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
                  fallback=""
                  src={data.images && data.images[0].url}
                ></Avatar>
                <Text
                  size={{
                    initial: "7",
                    md: "7",
                    sm: "7",
                    xl: "7",
                  }}
                >
                  {data.display_name}
                </Text>
              </Flex>
              <Text as="p" size="2" className="small-text">
                Find below your lifetime Spotify behaviour
              </Text>
            </Flex>
            <Flex gap="5" wrap="wrap">
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
