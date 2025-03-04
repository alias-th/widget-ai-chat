import React from "react";
import { ChatSessionChatMessageType } from "../types/chats";
type ChatUserProps = {
    chats: ChatSessionChatMessageType[];
    chat: ChatSessionChatMessageType;
    index: number;
    isLoading?: boolean;
};
export declare const ChatUser: (props: ChatUserProps) => React.JSX.Element;
export {};
