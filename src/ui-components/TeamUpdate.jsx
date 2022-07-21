/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function TeamUpdate(props) {
  const { teamUpdate, overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="100px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "TeamUpdate")}
    >
      <Flex
        gap="10px"
        position="absolute"
        top="0px"
        left="0px"
        direction="column"
        justifyContent="center"
        padding="34px 22px 34px 22px"
        backgroundColor="rgba(255,255,255,1)"
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
        width="364px"
        height="100px"
        position="absolute"
        top="0px"
        left="100px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
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
          left="159px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={teamUpdate?.teamName}
          {...getOverrideProps(overrides, "Team Name")}
        ></Text>
      </View>
      <View
        width="364px"
        height="100px"
        position="absolute"
        top="0px"
        left="464px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
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
          left="159px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={teamUpdate?.teamSpeed}
          {...getOverrideProps(overrides, "Team Speed")}
        ></Text>
      </View>
      <View
        width="364px"
        height="100px"
        position="absolute"
        top="0px"
        left="828px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
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
          left="158px"
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
        backgroundColor="rgba(255,255,255,1)"
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
    </View>
  );
}
