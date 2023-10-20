import React from "react";
import { Text, Flex, Separator, Heading } from "@radix-ui/themes";
import TrackRow from "../components/TrackRow";

const SummaryCard = ({ userData }) => {
  return (
    <>
      <div id="summary-card">
        <Flex
          direction={`column`}
          gap={`5`}
          align="center"
          className="summary-card"
        >
          <Flex direction={`column`} gap={`1`} align="center" className="no-bg">
            <Heading className="no-bg black-text" size={`4`}>
              {userData.display_name}
              ’s top 5 songs
            </Heading>
            <Text as="p" size="2" className="track-text no-bg" align="center">
              Your top songs summary
            </Text>
          </Flex>
          <Separator orientation="horizontal" size="4" />

          {/* track list */}
          <Flex className="no-bg track-list" direction={`column`} gap={`5`}>
            {trackData.items?.map((track, index) => (
              <TrackRow
                key={index}
                trackData={track} // Pass the track data as a prop to MusicCard
                // isFirstCard={index === 0}
              ></TrackRow>
            ))}
            {/* <TrackRow></TrackRow> */}
          </Flex>
          <Separator orientation="horizontal" size="4" />
          <Text size="2" className="sumary-text no-bg" align="center">
            https://waavify.vercel.app
          </Text>
        </Flex>
      </div>
    </>
  );
};

export default SummaryCard;
