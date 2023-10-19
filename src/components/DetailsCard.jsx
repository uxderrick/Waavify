import { Flex, Text } from "@radix-ui/themes";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

const DetailsCard = ({ trackData, isFirstCard, topArtist }) => {
  if (isFirstCard === true) {
    return (
      <>
        <Flex align="start" justify="start" gap="3" wrap="wrap">
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
              <p className="details-value" align="center">
                {topArtist?.items[0]?.name}
              </p>
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
              <p className="details-value">
                {topArtist?.items[0]?.genres[0]?.substring(0, 1).toUpperCase() +
                  topArtist.items[0]?.genres[0]?.substring(1)}
              </p>
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  }
};

export default DetailsCard;
