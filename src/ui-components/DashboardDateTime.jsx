/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function DashboardDateTime(props) {
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
      {...getOverrideProps(overrides, "DashboardDateTime")}
    >
      <View
        width="740px"
        height="100px"
        position="absolute"
        top="0px"
        left="700px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Text
          fontFamily="Open Sans"
          fontSize="48px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="38px"
          left="312px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="TIME"
          {...getOverrideProps(overrides, "TIME")}
        ></Text>
      </View>
      <View
        width="700px"
        height="100px"
        position="absolute"
        top="0px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 419")}
      >
        <Text
          fontFamily="Open Sans"
          fontSize="48px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="38px"
          left="288px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={teamUpdate?.date}
          {...getOverrideProps(overrides, "DATE")}
        ></Text>
      </View>
    </View>
  );
}
