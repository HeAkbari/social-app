import { SocialEnvironment } from "../app/shared/models/environment";
import { EnvType } from "../app/shared/models/environmentType";

const spaAppUrl = 'http://localhost:4200';
export const environment: SocialEnvironment = {
  env:EnvType.DEV,
  version: '1.0.0',
  build: '209 - 08/20/2023',
  production: false,
  apiURL: 'https://jsonplaceholder.typicode.com/',
  appUrl: spaAppUrl,
};
