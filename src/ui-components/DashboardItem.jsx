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
    setHighlightBackgroundColor("#FEF02F");
  };
  return (
    <View
      width="1440px"
      height="103px"
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
          {...getOverrideProps(overrides, "114915")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        position="absolute"
        top="0px"
        left="277px"
        width="344px"
        alignItems="center"
        padding="38px 100px 38px 100px"
        backgroundColor="rgba(255,255,255,0)"
        {...getOverrideProps(overrides, "TeamFrame14911")}
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
          children={teamUpdate?.teamName}
          {...getOverrideProps(overrides, "Leffler Isle")}
        ></Text>
      </Flex>
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
          {...getOverrideProps(overrides, "15")}
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
          {...getOverrideProps(overrides, "Canada")}
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
        {...getOverrideProps(overrides, "WeatherFrame14914")}
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
          {...getOverrideProps(overrides, "3")}
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
          {...getOverrideProps(overrides, "Follow")}
        ></Text>
      </View>
      <View
        width="248px"
        height="100px"
        position="absolute"
        top="304px"
        left="1192px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        {...getOverrideProps(overrides, "WeatherFrame22696")}
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
          children="1"
          {...getOverrideProps(overrides, "122697")}
        ></Text>
      </View>
      <View
        width="344px"
        height="100px"
        position="absolute"
        top="804px"
        left="277px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        {...getOverrideProps(overrides, "TeamFrame226160")}
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
          children="&#x9;Huel Trail"
          {...getOverrideProps(overrides, "Huel Trail")}
        ></Text>
      </View>
    </View>
  );
}
