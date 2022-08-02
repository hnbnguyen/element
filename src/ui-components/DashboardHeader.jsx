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
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function DashboardHeader(props) {
  const { teamUpdate, overrides, ...rest } = props;
  const rectangleSevenFourFiveOnClick = useNavigateAction({
    type: "url",
    url: "/lasthour",
  });
  const currenthourOnClick = useNavigateAction({ type: "url", url: "/auth" });
  return (
    <View
      width="1440px"
      height="170px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DashboardHeader")}
    >
      <View
        width="1440px"
        height="39px"
        position="absolute"
        top="98px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 422")}
      >
        <View
          width="309px"
          height="38px"
          position="absolute"
          top="1px"
          left="382px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 423")}
        >
          <View
            width="176px"
            height="37px"
            position="absolute"
            top="1px"
            left="116px"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="20px"
            padding="0px 0px 0px 0px"
            onClick={() => {
              rectangleSevenFourFiveOnClick();
            }}
            {...getOverrideProps(overrides, "Rectangle 745")}
          ></View>
          <Text
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="700"
            color="rgba(17,61,124,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="7px"
            left="146px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Previous hour"
            {...getOverrideProps(overrides, "Previous hour")}
          ></Text>
        </View>
        <View
          width="351px"
          height="39px"
          position="absolute"
          top="0px"
          left="691px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 424")}
        >
          <Text
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="700"
            color="rgba(174,193,27,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            textDecoration="underline"
            position="absolute"
            top="8px"
            left="153px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Current hour"
            onClick={() => {
              currenthourOnClick();
            }}
            {...getOverrideProps(overrides, "Current hour")}
          ></Text>
        </View>
      </View>
      <Flex
        gap="20px"
        position="absolute"
        top="0px"
        left="0px"
        width="1440px"
        justifyContent="center"
        alignItems="center"
        padding="29px 200px 29px 200px"
        {...getOverrideProps(overrides, "Frame 425")}
      >
        <Text
          fontFamily="Open Sans"
          fontSize="64px"
          fontWeight="700"
          color="rgba(17,61,124,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="LEADERBOARD"
          {...getOverrideProps(overrides, "LEADERBOARD")}
        ></Text>
        <Text
          fontFamily="Open Sans"
          fontSize="32px"
          fontWeight="700"
          color="rgba(147,191,213,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="@ 11:00am EST Aug 3rd, 2022"
          {...getOverrideProps(overrides, "@ 11:00am EST Aug 3rd, 2022")}
        ></Text>
      </Flex>
    </View>
  );
}
