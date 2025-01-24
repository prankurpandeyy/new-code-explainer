import { Editor } from "@monaco-editor/react";
import React from "react";

function Screentwo({ explanation }) {
  // Format the explanation with line breaks
  const formatExplanation = (text) => {
    // Split analysis into sections and add line breaks
    return text
      .replace(/\d+\./g, "\n$&") // Add line break before numbered points
      .replace(/([.!?])\s+/g, "$1\n\n") // Add double line break after sentences
      .trim();
  };

  return (
    <div className="bg-green-100 p-4 h-full">
      <h2 className="text-xl text-red-400 font-semibold mb-4">
        Generated Code
      </h2>
      <Editor
        height="80vh"
        defaultLanguage="javascript"
        value={formatExplanation(explanation)}
        theme="vs-dark"
        options={{
          readOnly: true,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          wordWrap: "on", // Enable word wrapping
          lineNumbers: "on",
          wrappingIndent: "indent",
          fontSize: 14,
        }}
      />
    </div>
  );
}

export default Screentwo;
