import { View, Text } from "react-native";

export const HolaMundoScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text
      style={{
        fontSize: 45,
        textAlign: "center",
      }}
    >
      Hola Diego
    </Text>
  </View>
);
