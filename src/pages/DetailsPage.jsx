import React, { useEffect, useState } from "react";
import { Text, Flex, Box, Avatar } from "@radix-ui/themes";
import DetailsCard from "../components/DetailsCard";
import MusicCard from "../components/MusicCard";
import axios from "axios";

const USERDATA_ENDPOINT = "https://api.spotify.com/v1/me";
const TRACK_ENDPOINT =
  "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10";

const DetailsPage = () => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [trackData, setTrackData] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;

    // get spotify user data
    const fetchUserData = (token) => {
      axios
        .get(USERDATA_ENDPOINT, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          setUserData(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const fetchTrackData = (token) => {
      axios
        .get(TRACK_ENDPOINT, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          setTrackData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (hash) {
      const _token = hash.substring(1).split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      // window.location.hash = " ";
      // console.log();
      fetchUserData(_token);
      fetchTrackData(_token);
    }
  }, [token]);

  return (
    <>
      <Box
        py="1"
        style={{
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
                  src={userData.images && userData.images[0].url}
                ></Avatar>
                <Text
                  size={{
                    initial: "7",
                    md: "7",
                    sm: "7",
                    xl: "7",
                  }}
                >
                  {userData.display_name}
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
                  My top {trackData.items?.length} songs
                </Text>
              </Flex>
            </Flex>
            <Flex gap="6" wrap="wrap" width="100%">
              {trackData.items?.map((track, index) => (
                <MusicCard
                  key={index}
                  trackData={track} // Pass the track data as a prop to MusicCard
                ></MusicCard>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default DetailsPage;
