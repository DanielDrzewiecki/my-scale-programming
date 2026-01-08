import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import ThankYou from "./components/ThankYou";
import { trackingManager } from "./lib/trackingManager";
import { initializeUTMTracking } from "./lib/utmTracking";
import "./App.css";

function App() {
  // Initialisiere Tracking beim Laden der App
  React.useEffect(() => {
    // Lade Facebook Pixel sofort
    trackingManager.initializeTracking();
    
    // UTM-Parameter erfassen und speichern
    const utmParams = initializeUTMTracking();
    if (Object.keys(utmParams).length > 0) {
      console.log('UTM-Parameter beim App-Start erfasst:', utmParams);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;

