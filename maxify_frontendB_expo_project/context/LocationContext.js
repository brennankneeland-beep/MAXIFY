import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import * as Location from "expo-location";

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [location, setLocation] = useState(null);
  const [speed, setSpeed] = useState(0);
  const [activity, setActivity] = useState("Detecting...");
  const prev = useRef(null);

  useEffect(() => {
    startTracking();
  }, []);

  async function startTracking() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setActivity("Permission denied");
      return;
    }

    Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 2000,
        distanceInterval: 1,
      },
      (loc) => {
        const coords = loc.coords;
        setLocation(coords);

        if (prev.current) {
          const v = calculateSpeed(prev.current, coords);
          setSpeed(v);
          detectActivity(v);
        }

        prev.current = coords;
      }
    );
  }

  function calculateSpeed(a, b) {
    const dx = a.latitude - b.latitude;
    const dy = a.longitude - b.longitude;
    const dist = Math.sqrt(dx*dx + dy*dy) * 111139;
    return dist / 2;
  }

  function detectActivity(v) {
    if (v < 0.5) setActivity("Stationary");
    else if (v < 2) setActivity("Walking");
    else if (v < 4) setActivity("Running");
    else setActivity("Vehicle");
  }

  return (
    <LocationContext.Provider value={{ location, speed, activity }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}