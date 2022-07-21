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
  useDataStoreCreateAction,
} from "@aws-amplify/ui-react/internal";
import { UserInfo } from "../models";
import { schema } from "../models/schema";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function SignupForm(props) {
  const { signupPagePicture, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const groupOneOnClick = useDataStoreCreateAction({
    fields: {
      email: authAttributes["email"],
      username: authAttributes["preferred_username"],
    },
    model: UserInfo,
    schema: schema,
  });
  return (
    <Flex
      gap="50px"
      direction="column"
      width="1440px"
      height="1732px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="32px 0px 32px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SignupForm")}
    >
      <Flex
        gap="10px"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="32px 92px 32px 92px"
        {...getOverrideProps(overrides, "Frame 410")}
      >
        <Text
          fontFamily="Inter"
          fontSize="64px"
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
          children="Sign up"
          {...getOverrideProps(overrides, "Sign up")}
        ></Text>
      </Flex>
      <Flex
        gap="20px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 32px 0px 32px"
        {...getOverrideProps(overrides, "Frame 409")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Username"
          {...getOverrideProps(overrides, "Username")}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          width="1381px"
          height="45px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 3")}
        >
          <View
            width="1381px"
            height="45px"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle 74014275")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(161,161,161,1)"
            lineHeight="30px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="7.5px"
            left="26px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            textTransform=""
            children="Enter your username..."
            {...getOverrideProps(overrides, "Enter your username...")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Email"
          {...getOverrideProps(overrides, "Email")}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          width="1381px"
          height="45px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 6")}
        >
          <View
            width="1381px"
            height="45px"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle 7401565")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(161,161,161,1)"
            lineHeight="30px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="7.5px"
            left="26px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Enter your email address..."
            {...getOverrideProps(overrides, "Enter your email address...")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Password"
          {...getOverrideProps(overrides, "Password")}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          width="1381px"
          height="45px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 4")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(161,161,161,1)"
            lineHeight="30px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="7.5px"
            left="26px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Enter your password..."
            {...getOverrideProps(overrides, "Enter your password...")}
          ></Text>
          <View
            width="1381px"
            height="45px"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle 741")}
          ></View>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Confirm password"
          {...getOverrideProps(overrides, "Confirm password")}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          width="1381px"
          height="45px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 5")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(161,161,161,1)"
            lineHeight="30px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="7.5px"
            left="26px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Confirm your password..."
            {...getOverrideProps(overrides, "Confirm your password...")}
          ></Text>
          <View
            width="1381px"
            height="45px"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle 742")}
          ></View>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="30px 63px 30px 63px"
        {...getOverrideProps(overrides, "Frame 326")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="234px"
          height="58px"
          shrink="0"
          position="relative"
          onClick={() => {
            groupOneOnClick();
          }}
          {...getOverrideProps(overrides, "Group 1")}
        >
          <View
            width="234px"
            height="58px"
            position="absolute"
            top="0px"
            left="0px"
            border="2px SOLID rgba(0,0,0,1)"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 739")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="40px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="187px"
            height="31px"
            position="absolute"
            top="10.5px"
            left="23.5px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create account"
            {...getOverrideProps(overrides, "Create account")}
          ></Text>
        </Flex>
      </Flex>
      <Image
        width="844px"
        height="844px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src="https://rachelsirishadventures.com/wp-content/uploads/2020/08/ECCH_S1_02040_SPStatic_SurvivingFijiRivers_SocialSquare_1080x1080_Final_VM-768x768.jpg"
        {...getOverrideProps(overrides, "image 38")}
      ></Image>
    </Flex>
  );
}
