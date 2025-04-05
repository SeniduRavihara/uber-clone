import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import type { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button
        title="Increment"
        onPress={() => dispatch(increment())}
        accessibilityLabel="Increment value"
      />
      <Text style={styles.count}>{count}</Text>
      <Button
        title="Decrement"
        onPress={() => dispatch(decrement())}
        accessibilityLabel="Decrement value"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    fontSize: 24,
    marginVertical: 10,
  },
});
