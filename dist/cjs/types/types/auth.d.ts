import { ResponseType } from './common';
export type LoginResponseType = ResponseType<{
    access_token: string;
    refresh_token: string;
    expires_in: string;
}>;
export type LoginPayloadType = {
    code: string | null;
    redirect_uri: string | null;
};
export type RefreshTokenPayloadType = {
    refresh_token: string;
};
export type RefreshTokenResponseType = LoginResponseType;
export type LogoutPayloadType = {
    refresh_token: string;
};
export type GuestTokenResponseType = ResponseType<{
    guest_access_token: string;
}>;
export type VerifyKpTokenPayloadType = {
    x_kp_token: string;
};
