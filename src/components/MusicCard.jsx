import { Flex, Heading, Text, Button } from "@radix-ui/themes";
import React from "react";

const MusicCard = () => {
  return (
    <>
      <Flex className="music-card" direction="column" gap="5">
        <Flex className="music-photo"></Flex>
        <Flex
          className="song-dets no-bg"
          direction="column"
          gap="5"
          width="100%"
        >
          <Flex direction="column" gap="1" className="no-bg">
            <Heading className="no-bg song-title" size="4">
              Jumping
            </Heading>
            <Flex gap="2" className="no-bg" justify="center">
              <Text className="song-title small-text no-bg" size="2">
                Chief Kellz
              </Text>
              <Text className="song-title small-text no-bg" size="2">
                •
              </Text>
              <Text className="song-title small-text no-bg" size="2">
                2022
              </Text>
            </Flex>
          </Flex>
          <Button
            variant="solid"
            radius="full"
            color="#ffffff"
            size="2"
            className="button"
          >
            Listen on Spotify
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default MusicCard;
