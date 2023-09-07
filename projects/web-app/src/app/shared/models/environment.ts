import {EnvType} from "./environmentType";

export abstract class SocialEnvironment {
	version: string;
	build: string;
	production?: boolean;
	env?: EnvType;
  apiURL: string;
  appUrl: string;
}
