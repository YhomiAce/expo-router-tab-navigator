import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

const ColorList = ({ color }) => {
  return (
    <ScrollView style={styles.container}>
      {[1, 0.8, 0.5].map((opacity) => (
        <View
          key={opacity}
          style={[styles.color, { backgroundColor: color, opacity }]}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  color: {
    width: "100%",
    height: 150,
    borderRadius: 25,
    borderCurve: "continuous",
    marginBottom: 15,
  },
  container: {
    paddingHorizontal: 20,
  },
});

export default ColorList;
