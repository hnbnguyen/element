/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuth,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function UserHeader(props) {
  const { userInfo, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const rectangleSevenFourThreeOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1440px"
      alignItems="flex-start"
      position="relative"
      padding="16px 0px 16px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "UserHeader")}
    >
      <Flex
        gap="10px"
        direction="row"
        width="1166px"
        height="72px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 340px 0px 340px"
        {...getOverrideProps(overrides, "Frame 324")}
      >
        <Image
          width="61px"
          height="55px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image 39")}
        ></Image>
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
          letterSpacing="0.05px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Hi,"
          {...getOverrideProps(overrides, "Hi,")}
        ></Text>
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
          letterSpacing="0.05px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={authAttributes["preferred_username"]}
          {...getOverrideProps(overrides, "username")}
        ></Text>
      </Flex>
      <View
        width="264px"
        height="72px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 420")}
      >
        <View
          width="217px"
          height="45px"
          position="absolute"
          top="14px"
          left="23px"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="50px"
          padding="0px 0px 0px 0px"
          onClick={() => {
            rectangleSevenFourThreeOnClick();
          }}
          {...getOverrideProps(overrides, "Rectangle 743")}
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
          letterSpacing="0.05px"
          position="absolute"
          top="24px"
          left="92px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign out"
          {...getOverrideProps(overrides, "Sign out")}
        ></Text>
      </View>
    </Flex>
  );
}
