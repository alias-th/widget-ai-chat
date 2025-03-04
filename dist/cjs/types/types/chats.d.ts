import { ResponseType, ListType } from "./common";
export declare enum EnumSenderType {
    User = "user",
    Ai = "ai"
}
export declare enum ChatErrorCodeType {
    "1000:0002" = "1000:0002",
    "1000:0017" = "1000:0017",
    "1000:0018" = "1000:0018"
}
export declare enum ChatErrorMessageType {
    "1000:0002" = "Character limit per message exceeded",
    "1000:0017" = "Max file per period exceeded",
    "1000:0018" = "Max file char per period exceeded"
}
export type ChatFileType = {
    name: string;
    mime_type: string;
    extract_message: string;
};
export type CitationType = {
    index: number;
    link_url: string;
    icon_url: string;
    title: string;
    source: string;
};
export type ChatSessionType = {
    id: string;
    title: string;
};
export type ChatSessionChatMessageType = {
    id?: string | null;
    message: string;
    citations: CitationType[] | null;
    sender_type: EnumSenderType;
    is_like: boolean;
    is_dislike: boolean;
    files?: ChatFileType[];
};
export type ConversationStarterType = {
    id: number;
    title: string;
    prompt: string;
};
export type ChatSessionListType = ListType<ChatSessionType>;
export type ChatSessionChatMessagesListType = ResponseType<{
    chat_messages: ChatSessionChatMessageType[];
}>;
export type ChatConversationStarterListType = ResponseType<{
    conversation_starters: ConversationStarterType[];
}>;
export type ChatConversationStarterParamsType = {
    size?: number;
};
export type PostMessagePayloadType = {
    message: string;
    chat_session_id?: string | null;
    conversation_starter_id?: number | null;
    files?: ChatFileType[];
};
export type PostMessageResponseType = ResponseType<{
    chat_session_id: string;
    chat_message_id: string;
}>;
export type PostMessageRegeneratePayloadType = {
    message: string;
};
export type PostMessageRegenerateResponseType = ResponseType<{
    chat_session_id: string;
    chat_message_id: string;
}>;
export type PostMessageFeedbackPayloadType = {
    is_like: boolean;
} | {
    is_dislike: boolean;
};
export type PostMessageFeedbackResponseType = ResponseType<{
    message: string;
}>;
export type ChatStreamSSEType = {
    citations: CitationType[];
    answer: string;
    is_final: boolean;
};
export type ChatAiConfigType = {
    is_disclaimer: boolean;
    is_credit_full: boolean;
};
export type GetChatAiConfigResponseType = ResponseType<ChatAiConfigType>;
export type PatchChatAiConfigPayloadType = {
    is_disclaimer: boolean;
};
