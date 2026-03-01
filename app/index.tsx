import { Redirect } from "expo-router";
import { useAuth } from "../context/AuthContext";

export default function Index() {
  const { accessToken } = useAuth();
  return accessToken ? <Redirect href="/home" /> : <Redirect href="/welcome" />;
}
