import React from "react";

const ExportSummary = () => {
  return (
    <>
      <Flex
        className="music-card"
        direction="column"
        gap="5"
        style={{ border: `${isFirstCard ? "white" : null}` }}
      >
        <Flex
          className="music-photo"
          style={{
            backgroundImage: `url(${trackData?.album?.images[0]?.url})`,
          }}
        ></Flex>
        <Flex
          className="song-dets no-bg"
          direction="column"
          gap="5"
          width="100%"
        >
          <Flex direction="column" gap="1" className="no-bg">
            <Heading className="no-bg song-title" size="4">
              {trackData?.name}
            </Heading>
            <Flex gap="2" className="no-bg" justify="center">
              <Text className="song-title small-text no-bg" size="2">
                {trackData?.artists[0]?.name}
              </Text>
              <Text className="song-title small-text no-bg" size="2">
                •
              </Text>
              <Text className="song-title small-text no-bg" size="2">
                {trackData?.album?.release_date?.split("-")[0]}
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

export default ExportSummary;
