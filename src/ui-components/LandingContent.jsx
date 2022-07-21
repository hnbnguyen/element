/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function LandingContent(props) {
  const { overrides, ...rest } = props;
  const groupTwoOnClick = useNavigateAction({ type: "url", url: "/auth" });
  return (
    <Flex
      gap="50px"
      direction="column"
      width="1440px"
      alignItems="center"
      position="relative"
      padding="168px 118px 168px 118px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "LandingContent")}
    >
      <Flex
        gap="10px"
        direction="column"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 325")}
      >
        <Text
          fontFamily="Georgia"
          fontSize="100px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="120px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="1183px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Experience eco-challenge race in real time "
          {...getOverrideProps(
            overrides,
            "Experience eco-challenge race in real time"
          )}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="40px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="1171px"
          height="41px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Hourly update of your favourite team, live map tracking, and a leaderboard for the Cape Horn Race 2022"
          {...getOverrideProps(
            overrides,
            "Hourly update of your favourite team, live map tracking, and a leaderboard for the Cape Horn Race 2022"
          )}
        ></Text>
      </Flex>
      <View
        width="526px"
        height="160px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 326")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="400px"
          height="100px"
          position="absolute"
          top="30px"
          left="63px"
          onClick={() => {
            groupTwoOnClick();
          }}
          {...getOverrideProps(overrides, "Group 2")}
        >
          <View
            width="400px"
            height="100px"
            position="absolute"
            top="0px"
            left="0px"
            border="2px SOLID rgba(0,0,0,1)"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 739")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="40px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="40px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="30px"
            left="78px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Join Element"
            {...getOverrideProps(overrides, "Join Element")}
          ></Text>
        </View>
      </View>
      <Image
        width="845px"
        height="845px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src="https://rachelsirishadventures.com/wp-content/uploads/2020/08/ECCH_S1_02040_SPStatic_SurvivingFijiOcean_SocialSquare_1080x1080_Final_VM-768x768.jpg"
        {...getOverrideProps(overrides, "image 36")}
      ></Image>
    </Flex>
  );
}
