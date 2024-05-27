import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./GameReset.style";
export function GameReset({onPress}) {
  return (
    <>
      <TouchableOpacity onPress={onPress}style={s.gameAgain} >
        <Text style={s.text}>Jouer encore</Text>
      </TouchableOpacity>
    </>
  );
}
