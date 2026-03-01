import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-swiper";

const onboarding = [
  {
    id: 1,
    title: "🏋️ Working out",
    description: "High-energy workout playlists",
  },
  {
    id: 2,
    title: "📚 Relaxing or studying",
    description: "Focus music for deep work",
  },
  {
    id: 3,
    title: "🚴 Moving fast (sports, cycling, running)",
    description: "Music that matches the pace",
  },
];

export default function Welcome() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push("/login")}
        style={styles.skipWrap}
      >
        <Text style={styles.skipText}>SKIP</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        onIndexChanged={(index) => setActiveIndex(index)}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
      >
        {onboarding.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        ))}
      </Swiper>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() =>
          isLastSlide ? router.push("/login") : swiperRef.current?.scrollBy(1)
        }
      >
        <Text style={styles.primaryButtonText}>
          {isLastSlide ? "GET STARTED" : "NEXT"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  skipWrap: { padding: 20, alignItems: "flex-end" },
  skipText: { color: "#efe4e4", fontWeight: "700" },

  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
    color: "pink",
  },
  desc: { marginTop: 12, color: "#555", textAlign: "center" },

  dot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "#B2E8F0",
    borderRadius: 999,
  },
  activeDot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "pink",
    borderRadius: 999,
  },

  primaryButton: {
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: "white",
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
  },
  primaryButtonText: { color: "black", fontWeight: "800", fontSize: 16 },
});
