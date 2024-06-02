import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Chat from "./pages/Chat.jsx";
import Navigation from "./components/Navigation.jsx";
import ImageEditor from "./pages/ImageEditor.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/image-editor" element={<ImageEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
