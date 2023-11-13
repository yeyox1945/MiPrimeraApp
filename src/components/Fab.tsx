import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";

interface Props {
  title: string;
  position?: "br" | "bl";
  onPress: () => void;
}

export default function Fab({ title, position = "br", onPress }: Props) {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={[
          styles.fabLocation,
          position === "bl" ? styles.left : styles.right,
        ]}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === "bl" ? styles.left : styles.right,
        ]}
      >
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple("#33333300", false, 30)}
        >
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === "ios" ? ios() : android();
}

const styles = StyleSheet.create({
  fabLocation: {
    position: "absolute",
    bottom: 20,
  },
  right: {
    right: 20,
  },
  left: {
    left: 20,
  },
  fab: {
    backgroundColor: "#5856d6",
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  fabText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
