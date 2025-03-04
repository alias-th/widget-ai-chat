import React from "react";
import { CitationType } from "../types/chats";
type CitationViewMoreCardProps = {
    citations: CitationType[];
    setOpen: (open: boolean) => void;
};
export declare const CitationViewMoreCard: (props: CitationViewMoreCardProps) => React.JSX.Element;
export {};
