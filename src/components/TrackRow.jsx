import React from "react";
import { Text, Flex } from "@radix-ui/themes";

const TrackRow = ({ trackData }) => {
  // handle button click
  const handleButtonClick = () => {
    const urlToOpen = `${trackData?.external_urls?.spotify}`;

    // open the spotify auth page
    window.location.href = urlToOpen;

    //
  };

  return (
    <>
      <Flex className="no-bg track" align={`center`}>
        <Text
          as="p"
          size="2"
          className="sumary-text no-bg black-text"
          onClick={handleButtonClick}
        >
          <strong className="no-bg" onClick={handleButtonClick}>
            {trackData?.name}
          </strong>
        </Text>
        <Flex gap={`2`} className="no-bg">
          <Text className="song-title track-text no-bg" size="2">
            {trackData?.artists[0]?.name}
          </Text>
          <Text className="song-title track-text no-bg" size="2">
            •
          </Text>
          <Text className="song-title track-text no-bg" size="2">
            {trackData?.album?.release_date?.split("-")[0]}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default TrackRow;
