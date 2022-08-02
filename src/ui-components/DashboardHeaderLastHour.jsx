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
export default function DashboardHeaderLastHour(props) {
  const { overrides, ...rest } = props;
  const currenthourOnClick = useNavigateAction({ type: "url", url: "/auth" });
  return (
    <View
      width="1440px"
      height="242px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DashboardHeaderLastHour")}
    >
      <View
        width="1440px"
        height="95px"
        position="absolute"
        top="142px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 421")}
      >
        <View
          width="100px"
          height="100px"
          position="absolute"
          top="0px"
          left="170px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 412")}
        >
          <Text
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
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
          width="342px"
          height="100px"
          position="absolute"
          top="0px"
          left="270px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 413")}
        >
          <Text
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="38px"
            left="111px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Team Name"
            {...getOverrideProps(overrides, "Team Name")}
          ></Text>
        </View>
        <View
          width="317px"
          height="100px"
          position="absolute"
          top="0px"
          left="612px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 414")}
        >
          <Text
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="38px"
            left="88px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Team Speed  (mph)"
            {...getOverrideProps(overrides, "Team Speed (mph)")}
          ></Text>
        </View>
        <View
          width="263px"
          height="100px"
          position="absolute"
          top="0px"
          left="929px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 415")}
        >
          <Text
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="38px"
            left="83px"
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
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="38px"
            left="86px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Wind (mph)"
            {...getOverrideProps(overrides, "Wind (mph)")}
          ></Text>
        </View>
      </View>
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
        direction="row"
        width="1440px"
        justifyContent="center"
        alignItems="center"
        padding="26px 200px 26px 200px"
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
          children="Leaderboard "
          {...getOverrideProps(overrides, "Leaderboard")}
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