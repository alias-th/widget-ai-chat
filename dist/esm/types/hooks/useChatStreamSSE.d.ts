import { CitationType } from "../types/chats";
export declare function useChatStreamSSE(xApiKey: string, chatMessageId: string | null, start: boolean, isRegenerate?: boolean): {
    messages: string;
    citations: CitationType[];
    isLoading: boolean;
    isError: boolean;
};
