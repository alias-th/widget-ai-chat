import React from "react";
import { ChatSessionChatMessageType } from "../types/chats";
type ChatFloatingBoxProps = {
    open: boolean;
    onClose: () => void;
    onChatChange?: (chats: ChatSessionChatMessageType[]) => void;
    xApiKey: string;
    onLogin?: () => void;
};
export declare const ChatFloatingBox: (props: ChatFloatingBoxProps) => React.JSX.Element;
export {};
