import React from "react";
import { z } from "zod";
declare const schema: z.ZodObject<{
    message: z.ZodOptional<z.ZodString>;
    files: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        mime_type: z.ZodString;
        extract_message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        mime_type: string;
        extract_message: string;
    }, {
        name: string;
        mime_type: string;
        extract_message: string;
    }>, "many">>>;
}, "strip", z.ZodTypeAny, {
    message?: string | undefined;
    files?: {
        name: string;
        mime_type: string;
        extract_message: string;
    }[] | null | undefined;
}, {
    message?: string | undefined;
    files?: {
        name: string;
        mime_type: string;
        extract_message: string;
    }[] | null | undefined;
}>;
export type ChatFormType = z.infer<typeof schema>;
type ChatFormProps = {
    onSubmit: (data: ChatFormType) => void;
    isLoading?: boolean;
    disabled?: boolean;
    limitUtilDate?: string;
    onStop?: () => void;
    disabledStop?: boolean;
    onLogin?: () => void;
};
export declare const ChatForm: (props: ChatFormProps) => React.JSX.Element;
export {};
