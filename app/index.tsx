import { Counter } from "@/features/counter/Counter";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text className="bg-blue-500 text-white">Hello</Text>
      <Counter />
    </SafeAreaView>
  );
}
