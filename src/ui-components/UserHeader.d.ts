/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserInfo } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type UserHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    userInfo?: UserInfo;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function UserHeader(props: UserHeaderProps): React.ReactElement;
