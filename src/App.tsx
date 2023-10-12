import Login from "./pages/Auth/Login/Login";
import Landingpage from "./pages/Landingpage/Landingpage";
import Schedule from "./pages/Schedule/Schedule";
import Settings from "./pages/Settings/Settings";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
