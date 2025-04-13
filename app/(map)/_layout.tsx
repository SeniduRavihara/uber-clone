import GMap from "@/components/GMap";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MapLayout() {
  return (
    <SafeAreaView className="flex-1">
      <View className="h-[60%] ">
        <GMap />
      </View>

      <View className="h-[40%] ">
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="navigate-card" options={{ headerShown: false }} />
          <Stack.Screen name="ride-option-card" options={{ headerShown: false }} />
        </Stack>
      </View>
    </SafeAreaView>
  );
}
