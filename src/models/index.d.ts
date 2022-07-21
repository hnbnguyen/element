import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SignupPagePictureMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LandingPagePictureMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamUpdateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SignupPagePicture {
  readonly id: string;
  readonly picture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SignupPagePicture, SignupPagePictureMetaData>);
  static copyOf(source: SignupPagePicture, mutator: (draft: MutableModel<SignupPagePicture, SignupPagePictureMetaData>) => MutableModel<SignupPagePicture, SignupPagePictureMetaData> | void): SignupPagePicture;
}

export declare class LandingPagePicture {
  readonly id: string;
  readonly picture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<LandingPagePicture, LandingPagePictureMetaData>);
  static copyOf(source: LandingPagePicture, mutator: (draft: MutableModel<LandingPagePicture, LandingPagePictureMetaData>) => MutableModel<LandingPagePicture, LandingPagePictureMetaData> | void): LandingPagePicture;
}

export declare class UserInfo {
  readonly id: string;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserInfo, UserInfoMetaData>);
  static copyOf(source: UserInfo, mutator: (draft: MutableModel<UserInfo, UserInfoMetaData>) => MutableModel<UserInfo, UserInfoMetaData> | void): UserInfo;
}

export declare class TeamUpdate {
  readonly id: string;
  readonly rank?: number | null;
  readonly teamName?: string | null;
  readonly teamSpeed?: number | null;
  readonly country?: string | null;
  readonly weatherCondition?: string | null;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly favourite?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TeamUpdate, TeamUpdateMetaData>);
  static copyOf(source: TeamUpdate, mutator: (draft: MutableModel<TeamUpdate, TeamUpdateMetaData>) => MutableModel<TeamUpdate, TeamUpdateMetaData> | void): TeamUpdate;
}