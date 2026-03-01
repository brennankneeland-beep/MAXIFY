import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function login() {
  const { setAccessToken } = useAuth();

  const handleLogin = async () => {
    const result = await WebBrowser.openBrowserAsync(
      "http://localhost:3000/login",
    );

    // Later you'll extract token from callback
    setAccessToken("mock_token");
    router.replace("/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MAXIFY</Text>
      <Text style={styles.subtitle}> Music that adapts to your movement</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login with Spotify</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "pink",
  },
  subtitle: {
    marginVertical: 10,
    color: "purple",
  },
  button: {
    marginTop: 30,
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30, // rounded button
    alignItems: "center",
  },

  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
