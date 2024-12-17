import React from "react";
import { UserAgentProvider } from "./userAgentProvider";

export const Providers: React.FC<{
  children: React.ReactNode;
  initialUserAgent?: string; // Pass the user agent from outside
}> = ({ children, initialUserAgent }) => {
  return (
    <UserAgentProvider initialUserAgent={initialUserAgent}>
      {children}
    </UserAgentProvider>
  );
};
