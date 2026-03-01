import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lets start</Text>
      <Text style={styles.subtitle}>Select a mode to begin</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: "white" }]}>
          <Text style={styles.buttonText}>Location based</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: "white" }]}>
          <Text style={styles.buttonText}>Sports mode</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: "white" }]}>
          <Text style={styles.buttonText}>Running</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 24,
    paddingTop: 250,
  },
  title: {
    color: "pink",
    fontSize: 34,
    fontWeight: "800",
    textAlign: "center",
  },
  subtitle: {
    color: "#aaa",
    marginTop: 8,
    fontSize: 16,
    textAlign: "center",
  },

  buttonContainer: {
    alignItems: "center",
    marginTop: 45,
    gap: 20,
  },

  button: {
    width: 220,
    paddingVertical: 20,
    borderRadius: 999,
    alignItems: "center",
  },

  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});
