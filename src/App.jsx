import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import LearnMore from "./pages/LearnMore.jsx";
import CyberSecurityInfo from "./pages/CyberSecurityInfo.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/cyber-security-info" element={<CyberSecurityInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
