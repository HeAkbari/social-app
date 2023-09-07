import { SocialEnvironment } from "../app/shared/models/environment";
import { EnvType } from "../app/shared/models/environmentType";

const spaAppUrl = "https://social.app-stage.com";
export const environment: SocialEnvironment = {
  env: EnvType.STAGE,
  version: "1.0.0",
  build: "1",
  production: true,
  apiURL: "https://jsonplaceholder.typicode.com/",
  appUrl: spaAppUrl,
};
