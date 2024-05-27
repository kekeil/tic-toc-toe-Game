import { Text, TouchableOpacity } from "react-native";
import { s } from "./Case.style";

export function Case({ value, onPress }) {
  return (
    <TouchableOpacity style={s.case} onPress={onPress}>
      <Text style={s.text}>{value}</Text>
    </TouchableOpacity>
  );
}
