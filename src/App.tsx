import { useState } from "react";

import Header from "./components/Header";
import MarkdownGuide from "./components/MarkdownGuide";
import MarkdownInput from "./components/MarkdownInput";

import "./App.css";

function App() {
  const handleToggleGuide = () => {
    console.log("Guide toggled!");
  };

  const [markdownText, setMarkdownText] = useState<string>("");

  return (
    <>
      <Header onToggleGuide={handleToggleGuide} />
      <MarkdownGuide />
      <MarkdownInput
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
      />
    </>
  );
}

export default App;
