export declare enum StatusEnum {
    Success = "Success",
    Error = "Error"
}
export type ListType<T> = {
    status: StatusEnum;
    results: {
        data: T[];
        meta: {
            page: number;
            page_size: number;
            total: number;
            total_page: number;
        };
    };
};
export type ParamsType = {
    page: number;
    page_size: number;
};
type ResponseSuccessType<T> = {
    status: StatusEnum.Success;
    results: T;
};
type ResponseErrorType = {
    status: StatusEnum.Error;
    error: {
        internal_code: string;
        message: string;
        details?: string;
    };
};
export type ResponseType<T> = ResponseSuccessType<T> | ResponseErrorType;
export {};
