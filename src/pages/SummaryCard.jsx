import React from "react";
import { Text, Flex, Box, Separator, Heading } from "@radix-ui/themes";
import TrackRow from "../components/TrackRow";
import axios from "axios";

const TOP_ARTISTS_ENDPOINT =
  "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10&offset=0";

const SummaryCard = ({ userData }) => {
  return (
    <>
      <Box>
        <Flex
          direction={`column`}
          gap={`5`}
          align="center"
          className="summary-card"
        >
          <Flex direction={`column`} gap={`1`} align="center" className="no-bg">
            <Heading className="no-bg black-text" size={`4`}>
              Derrick’s top 5 songs
            </Heading>
            <Text as="p" size="2" className="sumary-text no-bg" align="center">
              Your top songs summary
            </Text>
          </Flex>
          <Separator orientation="horizontal" size="4" color="gray" />

          {/* track list */}
          <Flex className="no-bg track-list" direction={`column`} gap={`5`}>
            <TrackRow
              key={index}
              trackData={track} // Pass the track data as a prop to MusicCard
              // isFirstCard={index === 0}
            ></TrackRow>
          </Flex>
          <Separator orientation="horizontal" size="4" color="gray" />
          <Text as="p" size="2" className="sumary-text no-bg" align="center">
            https://waavify.vercel.app
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default SummaryCard;
