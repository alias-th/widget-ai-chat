export declare const setCookie: (name: string, value: string) => void;
export declare const getCookie: (name: string) => string | undefined;
export declare const removeCookie: (name: string) => void;
export declare const COOKIE_KEYS: {
    readonly ACCESS_TOKEN: "access_token";
    readonly REFRESH_TOKEN: "refresh_token";
    readonly GUEST_TOKEN: "guest_token";
};
