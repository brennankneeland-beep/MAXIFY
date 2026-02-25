import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function LoginScreen() {
  const { setAccessToken } = useAuth();

  const handleLogin = async () => {
    const result = await WebBrowser.openBrowserAsync(
      "http://localhost:3000/login"
    );

    // Later you'll extract token from callback
    setAccessToken("mock_token");
    router.replace("/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Context-Aware Spotify</Text>
      <Text style={styles.subtitle}>
        Music that adapts to your movement
      </Text>

      <Text style={styles.button} onPress={handleLogin}>
        Login with Spotify
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    color: "green",
    fontWeight: "bold",
  },
});