/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function DashboardHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="100px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DashboardHeader")}
    >
      <View
        width="100px"
        height="100px"
        position="absolute"
        top="0px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 412")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          textDecoration="underline"
          position="absolute"
          top="38px"
          left="27px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Rank"
          {...getOverrideProps(overrides, "Rank")}
        ></Text>
      </View>
      <View
        width="364px"
        height="100px"
        position="absolute"
        top="0px"
        left="100px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 413")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          textDecoration="underline"
          position="absolute"
          top="38px"
          left="159px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Team Name"
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
        {...getOverrideProps(overrides, "Frame 414")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          textDecoration="underline"
          position="absolute"
          top="38px"
          left="123px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Team Speed"
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
        {...getOverrideProps(overrides, "Frame 415")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          textDecoration="underline"
          position="absolute"
          top="38px"
          left="123px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Country"
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
        {...getOverrideProps(overrides, "Frame 416")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          textDecoration="underline"
          position="absolute"
          top="38px"
          left="86px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Weather"
          {...getOverrideProps(overrides, "Weather")}
        ></Text>
      </View>
    </View>
  );
}
