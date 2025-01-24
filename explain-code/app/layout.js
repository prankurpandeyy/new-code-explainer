import "./globals.css";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";

export const metadata = {
  title: "AI Code Analysis",
  description: "AI CODE ANALYSIS TOOL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CopilotKit runtimeUrl="/api/copilotkit">{children}</CopilotKit>
      </body>
    </html>
  );
}
