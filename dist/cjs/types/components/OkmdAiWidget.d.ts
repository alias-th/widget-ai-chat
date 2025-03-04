import { FC } from "react";
import { ChatSessionChatMessageType } from "../types/chats";
import "../styles/globals.css";
export interface OkmdAiWidgetProps {
    apiKey: string;
    onLogin?: () => void;
    onChatChange?: (chats: ChatSessionChatMessageType[]) => void;
    onClose?: () => void;
    onOpen?: () => void;
}
export declare const OkmdAiWidget: FC<OkmdAiWidgetProps>;
