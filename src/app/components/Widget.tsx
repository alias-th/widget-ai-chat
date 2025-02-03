"use client";
import React, { FC } from "react";
import { OkmdAiWidget } from "@edvisory/okmd-ai-widget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Widget: FC = (): React.JSX.Element => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <OkmdAiWidget apiKey="okmdai-sFs5ghs31h3fsx153dzs1r3f1gbvzdsfhxzJSnfewlkJSNjknksnvuiozndJKJKiogfvlskn" />
      </QueryClientProvider>
    </div>
  );
};

export default Widget;
