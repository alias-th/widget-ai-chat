import { FC } from 'react';

declare enum EnumSenderType {
    User = "user",
    Ai = "ai"
}
type ChatFileType = {
    name: string;
    mime_type: string;
    extract_message: string;
};
type CitationType = {
    index: number;
    link_url: string;
    icon_url: string;
    title: string;
    source: string;
};
type ChatSessionChatMessageType = {
    id?: string | null;
    message: string;
    citations: CitationType[] | null;
    sender_type: EnumSenderType;
    is_like: boolean;
    is_dislike: boolean;
    files?: ChatFileType[];
};

interface OkmdAiWidgetProps {
    apiKey: string;
    onLogin?: () => void;
    onChatChange?: (chats: ChatSessionChatMessageType[]) => void;
    onClose?: () => void;
    onOpen?: () => void;
}
declare const OkmdAiWidget: FC<OkmdAiWidgetProps>;

export { OkmdAiWidget, OkmdAiWidgetProps };
