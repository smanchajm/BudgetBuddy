import { View, ViewStyle } from "react-native";


export default function Card({ children, style = {} }) {
  return (
    <View
      style={{
        padding: 15,
        borderRadius: 15,
        backgroundColor: "white",
        elevation: 8,
        shadowColor: "#000",
        shadowRadius: 8,
        shadowOffset: { height: 6, width: 0 },
        shadowOpacity: 0.15,
        ...style,
      }}
    >
      {children}
    </View>
  );
}