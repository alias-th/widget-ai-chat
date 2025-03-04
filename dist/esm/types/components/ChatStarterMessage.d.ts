import React from "react";
type ChatStarterMessageProps = {
    onCitationClick: (prompt: string, conversationStarterId?: number) => void;
    xApiKey: string;
};
export declare const ChatStarterMessage: (props: ChatStarterMessageProps) => React.JSX.Element;
export {};
