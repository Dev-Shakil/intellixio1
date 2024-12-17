import { getUserAgent } from "@/utils/getServerUserAgent";
import { UserAgentProvider } from "../components/providers/userAgentProvider";
import "./globals.css";
import { Layout } from "@/components/layout";

const RootLayout: React.FC<{ children: React.ReactNode }> =async ({ children }) => {
  const serverUserAgent: string = await getUserAgent();
  return (
    <html lang="en">
      <body>
        <UserAgentProvider initialUserAgent={serverUserAgent}>
          <Layout>{children}</Layout>
        </UserAgentProvider>
      </body>
    </html>
  );
};

export default RootLayout;
