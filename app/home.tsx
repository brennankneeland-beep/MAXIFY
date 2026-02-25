import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { accessToken } = useAuth();

  return (
    <View style={styles.container}>
      <Text>Logged in!</Text>
      <Text>Token: {accessToken}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});