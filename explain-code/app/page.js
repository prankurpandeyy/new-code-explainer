"use client"; // Only necessary for Next.js with App Router

import React, { useState } from "react";
import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import Screenone from "./components/Screenone";
import Screentwo from "./components/Screentwo";

function Page() {
  const [code, setCode] = useState("// Paste your code here"); // State for code input
  const [explanation, setExplanation] = useState(
    "// Explanation will appear here"
  ); // State for chatbot output

  // Update CopilotKit readable state
  useCopilotReadable({
    description:
      "Analyze and explain the code along with possible improvements.",
    value: code, // Sync input code with CopilotKit's readable state
  });

  // Define the CopilotKit action
  useCopilotAction({
    name: "analyzeCode",
    // description: "Analyze code via CopilotKit and show the response on screen",
    description:
      "Analyze and explain the code along with possible improvements.",
    parameters: [
      {
        name: "analysis", // Add new parameter for the analysis
        type: "string",
        required: true,
      },
    ],
    handler: async ({ code, analysis }) => {
      console.log("Received analysis:", analysis); // Debug log
      setExplanation(analysis);
      return `Analysis has been displayed: ${analysis.substring(0, 5000)}...`; // Confirmation message
    },
  });

  // Handle input changes in Screen One
  const handleCodeChange = (value) => {
    setCode(value); // Update the state for code
  };

  return (
    <div className="h-screen flex">
      {/* Screen One: Code Input */}
      <div className="w-1/2 border-r">
        <Screenone code={code} onChange={handleCodeChange} />
      </div>

      {/* Screen Two: Chatbot Output */}
      <div className="w-1/2">
        <Screentwo explanation={explanation} />
      </div>

      {/* Copilot Popup Assistant */}
      <CopilotPopup
        instructions={`
          You are a code analysis assistant. When the user asks for code explanation:
          1. Read the code from the provided context
          2. Analyze the code
          3. Use the analyzeCode action to display your analysis on Screen Two
         4. Always use the analyzeCode action to show your response, don't just reply in chat.
          
      Example: @analyzeCode(analysis: "Your analysis here")
        `}
        labels={{
          title: "Code Analysis Assistant",
          initial: "Ask me to explain your code!",
        }}
      />
    </div>
  );
}

export default Page;
