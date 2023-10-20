import React, { useEffect, useState } from "react";
import {
  Text,
  Flex,
  Box,
  Avatar,
  Heading,
  Separator,
  Button,
} from "@radix-ui/themes";
import DetailsCard from "../components/DetailsCard";
import MusicCard from "../components/MusicCard";
import axios from "axios";
import TrackRow from "../components/TrackRow";
import SummaryCard from "./SummaryCard";

const USERDATA_ENDPOINT = "https://api.spotify.com/v1/me";
const TRACK_ENDPOINT =
  "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5";

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
          setUserData(response?.data);
          // console.log(response?.data.id);

          //save user id to local storage
          window.localStorage.setItem("user_id", response?.data.id);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // get spotify track data
    const fetchTrackData = (token) => {
      axios
        .get(TRACK_ENDPOINT, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          setTrackData(response?.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (hash) {
      const _token = hash.substring(1).split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      fetchUserData(_token);
      fetchTrackData(_token);
      // fetchTopArtist(_token);
    } else null;
  }, [token]);

  //UI for the details page
  return (
    <>
      <Box
        py="1"
        // justify="center"
        // align="center"
        style={{
          color: "white",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <Flex direction="column" gap="9" width="100%">
          {/* logo */}
          <Flex justify={`start`}>
            <img
              className="logo"
              src="https://raw.githubusercontent.com/uxderrick/Waavify/8cd10ca0d56640d6e309d45504ea3cc9c2567386/src/assets/logo.svg"
            ></img>
          </Flex>
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
            <Flex gap="6" wrap="wrap">
              {trackData?.items?.map((track, index) => (
                <DetailsCard
                  key={index}
                  trackData={track} // Pass the track data as a prop to DetailsCard
                  // topArtist={topArtist} // Pass the track data as a prop to DetailsCard
                  isFirstCard={index === 0}
                ></DetailsCard>
              ))}
            </Flex>
          </Flex>

          <Flex direction="column" gap="4" width="100%">
            <Flex direction="column" gap="3" align="start">
              <Flex gap="2">
                <Text size="4" weight="bold">
                  Your Spotify summary
                </Text>
              </Flex>
            </Flex>
            <Flex gap="4" direction={`column`} width="100%">
              <Flex
                direction={`column`}
                gap={`5`}
                align="center"
                className="summary-card"
              >
                <Flex
                  direction={`column`}
                  gap={`1`}
                  align="center"
                  className="no-bg"
                >
                  <Heading className="no-bg black-text" size={`4`}>
                    {userData.display_name}
                    ’s top 5 songs
                  </Heading>
                  <Text
                    as="p"
                    size="2"
                    className="track-text no-bg"
                    align="center"
                  >
                    Your top songs summary
                  </Text>
                </Flex>
                <Separator orientation="horizontal" size="4" color="gray" />

                {/* track list */}
                <Flex
                  className="no-bg track-list"
                  direction={`column`}
                  gap={`5`}
                >
                  {trackData.items?.map((track, index) => (
                    <TrackRow
                      key={index}
                      trackData={track} // Pass the track data as a prop to MusicCard
                      // isFirstCard={index === 0}
                    ></TrackRow>
                  ))}
                  {/* <TrackRow></TrackRow> */}
                </Flex>
                <Separator orientation="horizontal" size="4" color="gray" />
                <Text
                  as="p"
                  size="2"
                  className="sumary-text no-bg"
                  align="center"
                >
                  https://waavify.vercel.app
                </Text>
              </Flex>
              <Button variant="solid" size="3" className="card-button">
                Download as JPEG
              </Button>
              <Flex gap={`6`} py={`6`}>
                {" "}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default DetailsPage;
