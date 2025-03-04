import React from "react";
import { TextAreaProps as AntdTextAreaProps } from "antd/es/input/TextArea";
type InputChatFormItemProps = {
    isLoading?: boolean;
    onSubmit?: () => void;
    onStop?: () => void;
    disabledStop?: boolean;
} & AntdTextAreaProps;
export declare const InputChatFormItem: (props: InputChatFormItemProps) => React.JSX.Element;
export {};
