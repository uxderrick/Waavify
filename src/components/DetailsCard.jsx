import { Flex, Text } from "@radix-ui/themes";
import React from "react";

const DetailsCard = () => {
  return (
    <>
      <Flex gap="6" wrap="wrap">
        <Flex
          align="center"
          justify="center"
          direction="column"
          className="details-box"
        >
          <p className="details-value">99</p>
          <Text as="p" size="3" className="small-text">
            Total songs listened to
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default DetailsCard;
