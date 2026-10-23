import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { Capacitor } from '@capacitor/core';

// Check if running as a native mobile app
if (Capacitor.isNativePlatform()) {
  ScreenOrientation.lock({ orientation: 'portrait' }).catch((err) => {
    console.warn('Orientation lock failed:', err);
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
