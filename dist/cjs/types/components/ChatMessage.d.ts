import React from "react";
import { ChatSessionChatMessageType } from "../types/chats";
type ChatMessageProps = {
    chats: ChatSessionChatMessageType[];
    disabled?: boolean;
    isLoading?: boolean;
    limit?: string | null;
    onRegenerate: (message: string, chatMessageId: string) => void;
    xApiKey: string;
};
export declare const ChatMessage: (props: ChatMessageProps) => React.JSX.Element;
export {};
