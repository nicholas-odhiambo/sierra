import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { Contact, Features, Help, Home, Intergrations, Pricing } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/integrations" element={<Intergrations />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
