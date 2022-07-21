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
  const { teamUpdate, overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="242px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DashboardHeader")}
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
            children="RANK"
            {...getOverrideProps(overrides, "RANK")}
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
            children="TEAM NAME"
            {...getOverrideProps(overrides, "TEAM NAME")}
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
            children="TEAM SPEED"
            {...getOverrideProps(overrides, "TEAM SPEED")}
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
            children="COUNTRY"
            {...getOverrideProps(overrides, "COUNTRY")}
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
            children="WEATHER"
            {...getOverrideProps(overrides, "WEATHER")}
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
          width="691px"
          height="38px"
          position="absolute"
          top="1px"
          left="0px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 423")}
        >
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
            left="322px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={teamUpdate?.date}
            {...getOverrideProps(overrides, "date")}
          ></Text>
        </View>
        <View
          width="749px"
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
            color="rgba(17,61,124,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="8px"
            left="351px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={teamUpdate?.time}
            {...getOverrideProps(overrides, "time")}
          ></Text>
        </View>
      </View>
      <View
        width="1440px"
        height="100px"
        position="absolute"
        top="0px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
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
          position="absolute"
          top="38px"
          left="377px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="HOURLY DASHBOARD"
          {...getOverrideProps(overrides, "HOURLY DASHBOARD")}
        ></Text>
      </View>
    </View>
  );
}
