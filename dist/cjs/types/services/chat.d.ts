import { ChatSessionListType, ChatSessionChatMessagesListType, ChatConversationStarterListType, PostMessagePayloadType, PostMessageResponseType, PostMessageRegeneratePayloadType, PostMessageRegenerateResponseType, PostMessageFeedbackResponseType, PostMessageFeedbackPayloadType, ChatConversationStarterParamsType, GetChatAiConfigResponseType, PatchChatAiConfigPayloadType } from "../types/chats";
import { ParamsType } from "../types/common";
export declare const CHATS_API_KEY: {
    GET_CHAT_SESSION_LIST: string;
    GET_CHAT_SESSION_CHAT_MESSAGES: string;
    GET_CHAT_CONVERSATION_STARTER_LIST: string;
    GET_CHAT_AI_CONFIG: string;
};
export declare const getChatConversationStarterListApi: (xApiKey: string, params?: ChatConversationStarterParamsType) => Promise<ChatConversationStarterListType>;
export declare const getChatSessionListApi: (params: ParamsType) => Promise<ChatSessionListType>;
export declare const getChatSessionChatMessagesApi: (chatSessionId: string) => Promise<ChatSessionChatMessagesListType | undefined>;
export declare const postMessageApi: (xApiKey: string, payload: PostMessagePayloadType) => Promise<PostMessageResponseType>;
export declare const postMessageRegenerateApi: (payload: PostMessageRegeneratePayloadType, chatMessageId: string) => Promise<PostMessageRegenerateResponseType>;
export declare const postMessageFeedbackApi: (xApiKey: string, payload: PostMessageFeedbackPayloadType, chatMessageId: string) => Promise<PostMessageFeedbackResponseType>;
export declare const getChatAiConfigApi: () => Promise<GetChatAiConfigResponseType>;
export declare const patchChatAiConfigApi: (payload: PatchChatAiConfigPayloadType) => Promise<any>;
