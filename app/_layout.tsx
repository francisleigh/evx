import { Slot } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GUTTER } from "../constants/spacing";

export default function HomeLayout() {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Slot />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {},
  container: {
    gap: GUTTER,
    padding: GUTTER,
  },
});
