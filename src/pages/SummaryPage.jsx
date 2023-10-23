import React, { useEffect, useState } from "react";
import { Text, Flex, Box, Button } from "@radix-ui/themes";
import SummaryCard from "./SummaryCard";
import axios from "axios";

const DetailsPage = () => {
  useEffect(() => {}, []);

  //UI for the details page
  return (
    <>
      <Box
        py="1"
        width={`fit-content`}
        // justify="center"
        // align="center"
        style={{
          color: "white",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <Flex direction="column" gap="7" width="auto" justify={`start`}>
          {/* logo */}
          <Flex
            justify={{
              initial: "center",
              md: "start",
              sm: "start",
              xl: "start",
            }}
          >
            <img
              className="logo"
              src="https://raw.githubusercontent.com/uxderrick/Waavify/8cd10ca0d56640d6e309d45504ea3cc9c2567386/src/assets/logo.svg"
            ></img>
          </Flex>
          <Flex direction="column" gap="6">
            <Flex
              direction="column"
              gap="3"
              align={{
                initial: "center",
                md: "start",
                sm: "start",
                xl: "start",
              }}
            >
              <Flex gap="2">
                <Text
                  size={{
                    initial: "7",
                    md: "7",
                    sm: "7",
                    xl: "7",
                  }}
                  align={`center`}
                >
                  Your Waavify Brief
                </Text>
              </Flex>
              <Text as="p" size="2" className="small-text" align={`center`}>
                Find below your lifetime Spotify behaviour
              </Text>
            </Flex>
          </Flex>

          <Flex
            direction="column"
            gap="4"
            width="100%"
            align={{
              initial: "center",
              md: "start",
              sm: "start",
              xl: "start",
            }}
          >
            <SummaryCard></SummaryCard>
            <Button variant="solid" size="3" className="card-button">
              Download as JPEG
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default DetailsPage;
