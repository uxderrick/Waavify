import { Flex, Heading, Text, Button } from "@radix-ui/themes";
import React from "react";

const MusicCard = ({ trackData, isFirstCard }) => {
  // handle button click
  const handleButtonClick = () => {
    const urlToOpen = `${trackData?.external_urls?.spotify}`;

    // open the spotify auth page
    window.location.href = urlToOpen;
  };

  return (
    //url for track image
    //trackData.album.images[0].url
    <>
      <Flex
        className="music-card"
        direction="column"
        gap="5"
        style={{ backgroundColor: `${isFirstCard ? "gold" : "#272727"}` }}
      >
        <Flex
          className="music-photo"
          style={{ backgroundImage: `url(${trackData.album.images[0].url})` }}
        ></Flex>
        <Flex
          className="song-dets no-bg"
          direction="column"
          gap="5"
          width="100%"
        >
          <Flex direction="column" gap="1" className="no-bg">
            <Heading
              className="no-bg song-title"
              size="4"
              style={{ color: `${isFirstCard ? "#272727" : "#ffffff"}` }}
            >
              {trackData?.name}
            </Heading>
            <Flex gap="2" className="no-bg" justify="center">
              <Text
                className="song-title small-text no-bg"
                size="2"
                style={{ color: `${isFirstCard ? "#272727" : "#94a3b8"}` }}
              >
                {trackData.artists[0].name}
              </Text>
              <Text
                className="song-title small-text no-bg"
                size="2"
                style={{ color: `${isFirstCard ? "#272727" : "#94a3b8"}` }}
              >
                •
              </Text>
              <Text
                className="song-title small-text no-bg"
                size="2"
                style={{ color: `${isFirstCard ? "#272727" : "#94a3b8"}` }}
              >
                {trackData.album.release_date.split("-")[0]}
              </Text>
            </Flex>
          </Flex>
          <Button
            variant="solid"
            radius="full"
            color="#ffffff"
            size="2"
            className="button"
            onClick={handleButtonClick}
          >
            Listen on Spotify
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default MusicCard;
