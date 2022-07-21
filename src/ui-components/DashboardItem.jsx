/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function DashboardItem(props) {
  const { teamUpdate, overrides, ...rest } = props;
  const [highlightBackgroundColor, setHighlightBackgroundColor] =
    useStateMutationAction("rgba(255,255,255,1)");
  const rectangleSevenFourFourOnClick = () => {
    setHighlightBackgroundColor("#DDE6EE");
  };
  const followOnClick = () => {
    setHighlightBackgroundColor("white");
  };
  return (
    <View
      width="1440px"
      height="100px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DashboardItem")}
    >
      <View
        width="1440px"
        height="100px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor={highlightBackgroundColor}
        {...getOverrideProps(overrides, "highlight")}
      ></View>
      <Flex
        gap="10px"
        position="absolute"
        top="0px"
        left="186px"
        direction="column"
        height="100px"
        justifyContent="center"
        padding="34px 22px 34px 22px"
        backgroundColor="rgba(255,255,255,0)"
        {...getOverrideProps(overrides, "RankFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={teamUpdate?.rank}
          {...getOverrideProps(overrides, "Rank")}
        ></Text>
      </Flex>
      <View
        width="344px"
        height="100px"
        position="absolute"
        top="0px"
        left="277px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        {...getOverrideProps(overrides, "TeamFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="38px"
          left="102px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={teamUpdate?.teamName}
          {...getOverrideProps(overrides, "Team Name")}
        ></Text>
      </View>
      <View
        width="315px"
        height="100px"
        position="absolute"
        top="0px"
        left="621px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        {...getOverrideProps(overrides, "SpeedFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="38px"
          left="76px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={teamUpdate?.teamSpeed}
          {...getOverrideProps(overrides, "Team Speed")}
        ></Text>
      </View>
      <View
        width="256px"
        height="100px"
        position="absolute"
        top="0px"
        left="936px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        {...getOverrideProps(overrides, "CountryFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="38px"
          left="90px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={teamUpdate?.country}
          {...getOverrideProps(overrides, "Country")}
        ></Text>
      </View>
      <View
        width="248px"
        height="100px"
        position="absolute"
        top="0px"
        left="1192px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        {...getOverrideProps(overrides, "WeatherFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="38px"
          left="100px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={teamUpdate?.weatherCondition}
          {...getOverrideProps(overrides, "Weather")}
        ></Text>
      </View>
      <View
        width="186px"
        height="100px"
        position="absolute"
        top="3px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 426")}
      >
        <View
          width="119px"
          height="46px"
          position="absolute"
          top="27px"
          left="34px"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="50px"
          padding="0px 0px 0px 0px"
          onClick={() => {
            rectangleSevenFourFourOnClick();
          }}
          {...getOverrideProps(overrides, "Rectangle 744")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="38px"
          left="63px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Follow"
          onClick={() => {
            followOnClick();
          }}
          {...getOverrideProps(overrides, "Follow")}
        ></Text>
      </View>
    </View>
  );
}
