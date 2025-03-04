import type { ChatSessionChatMessageType } from '../types/chats';
import type { ChatFormType } from '../components/ChatForm';
export declare const useFloatingChat: (xApiKey: string) => {
    chats: ChatSessionChatMessageType[];
    chatSessionId: string | null;
    limitUtilDate: string | undefined;
    isChatFormDisabled: boolean;
    isPostMessageLoading: boolean;
    isSSELoading: boolean;
    disabledStop: boolean;
    handleCitationClick: (prompt: string, conversationStarterId?: number) => void;
    handleSubmit: (data: ChatFormType, conversationStarterId?: number) => void;
    handleOnStop: () => void;
};
