import React from "react";
import type { ChatSessionChatMessageType } from "../types/chats";
type ChatToolbarProps = {
    chat: ChatSessionChatMessageType;
    xApiKey: string;
};
export declare const ChatToolbar: (props: ChatToolbarProps) => React.JSX.Element;
export {};
