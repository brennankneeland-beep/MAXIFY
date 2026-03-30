import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocation } from "../context/LocationContext";

export default function ActivityDisplay() {
  const { speed, activity } = useLocation();

  return (
    <View style={styles.box}>
      <Text style={styles.text}>Speed: {speed.toFixed(2)} m/s</Text>
      <Text style={styles.text}>Activity: {activity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    bottom: 80,
    left: 20,
    right: 20,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
});