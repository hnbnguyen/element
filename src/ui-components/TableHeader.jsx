/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function TableHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1442px"
      height="46px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "TableHeader")}
    >
      <View
        width="1440px"
        height="95px"
        position="absolute"
        top="-25px"
        left="2px"
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
            children="Team Speed (mph)"
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
    </View>
  );
}
