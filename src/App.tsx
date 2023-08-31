import Header from "./components/Header";
import MarkdownGuide from "./components/MarkdownGuide";

import "./App.css";

function App() {
  const handleToggleGuide = () => {
    console.log("Guide toggled!");
  };

  return (
    <>
      <Header onToggleGuide={handleToggleGuide} />
      <MarkdownGuide />
    </>
  );
}

export default App;
