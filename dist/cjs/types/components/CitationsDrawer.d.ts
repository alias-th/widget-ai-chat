import React from "react";
import { DrawerProps } from "antd";
import { CitationType } from "../types/chats";
type CitationsDrawerProps = DrawerProps & {
    citations: CitationType[];
};
export declare const CitationsDrawer: (props: CitationsDrawerProps) => React.JSX.Element;
export {};
