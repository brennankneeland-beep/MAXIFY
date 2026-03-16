import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import ActivityDisplay from "./components/ActivityDisplay";
import { LocationProvider, useLocation } from "./context/LocationContext";

function Main() {
  const { location } = useLocation();

  if (!location) return null;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker coordinate={location} />
      </MapView>

      <ActivityDisplay />
    </View>
  );
}

export default function App() {
  return (
    <LocationProvider>
      <Main />
    </LocationProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});