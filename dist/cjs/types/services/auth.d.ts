import { LoginPayloadType, LoginResponseType, LogoutPayloadType, GuestTokenResponseType, VerifyKpTokenPayloadType } from '../types/auth';
export declare const loginApi: (payload: LoginPayloadType) => Promise<LoginResponseType | undefined>;
export declare const logoutApi: (payload: LogoutPayloadType) => Promise<any>;
export declare const createGuestTokenApi: (xApiKey: string) => Promise<GuestTokenResponseType>;
export declare const verifyKpTokenApi: (payload: VerifyKpTokenPayloadType) => Promise<LoginResponseType>;
