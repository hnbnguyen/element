// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SignupPagePicture, LandingPagePicture, UserInfo, TeamUpdate } = initSchema(schema);

export {
  SignupPagePicture,
  LandingPagePicture,
  UserInfo,
  TeamUpdate
};