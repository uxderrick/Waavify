import { Flex, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TOP_ARTISTS_ENDPOINT =
  "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10&offset=0";

const DetailsCard = ({ trackData, isFirstCard }) => {
  const [topArtist, setTopArtist] = useState([null]);
  const token = window.localStorage.getItem("token");
  const topArtistName = window.localStorage.getItem("top_artist");
  const topGenre = window.localStorage.getItem("top_genre");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Loading skeleton
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // get spotify top artist data
    const fetchTopArtist = (token) => {
      axios
        .get(TOP_ARTISTS_ENDPOINT, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          setTopArtist(response?.data?.items[0]?.name);
          window.localStorage.setItem(
            "top_artist",
            response?.data?.items[0]?.name
          );

          window.localStorage.setItem(
            "top_genre",
            response?.data?.items[0]?.genres[0]
          );

          // console.log(response?.data?.items[2]?.genres.join(", "));
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchTopArtist(token);
  }, []);

  if (isFirstCard === true) {
    return (
      <div>
        <Flex
          align="start"
          justify="start"
          gap={{
            initial: "3",
            md: "6",
            sm: "6",
            xl: "6",
          }}
          wrap="wrap"
        >
          <Flex>
            <Flex
              align="center"
              justify="center"
              direction="column"
              className="details-box"
              gap="3"
            >
              <Text as="p" size="3" className="small-text">
                Your top artist is
              </Text>
              {loading && topArtist ? (
                <Skeleton
                  width={200}
                  height={30}
                  // className="loading"
                  baseColor="#202020"
                  highlightColor="#444"
                ></Skeleton>
              ) : (
                <p className="details-value" align="center">
                  {topArtist ? topArtistName : "Loading..."}
                </p>
              )}
            </Flex>
          </Flex>
          <Flex>
            <Flex
              align="center"
              justify="center"
              direction="column"
              className="details-box"
              gap="3"
            >
              <Text as="p" size="3" className="small-text">
                Your most listened to genre is
              </Text>
              {loading && topGenre ? (
                <Skeleton
                  width={200}
                  height={30}
                  // className="loading"
                  baseColor="#202020"
                  highlightColor="#444"
                ></Skeleton>
              ) : (
                <p className="details-value">
                  {topGenre
                    ? topGenre.charAt(0).toUpperCase() + topGenre.slice(1)
                    : "Loading..."}
                </p>
              )}
            </Flex>
          </Flex>
        </Flex>
      </div>
    );
  }
};

export default DetailsCard;
