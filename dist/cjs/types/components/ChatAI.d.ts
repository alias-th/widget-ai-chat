import React from "react";
import { ChatSessionChatMessageType } from "../types/chats";
type ChatAIProps = {
    chats: ChatSessionChatMessageType[];
    chat: ChatSessionChatMessageType;
    index: number;
    disabled?: boolean;
    isLoading?: boolean;
    onRegenerate: (message: string, chatMessageId: string) => void;
    isFloating?: boolean;
    xApiKey: string;
};
export declare const ChatAI: (props: ChatAIProps) => React.JSX.Element;
export {};
