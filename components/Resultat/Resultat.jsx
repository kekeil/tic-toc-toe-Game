import { View,Text } from "react-native";
import {s} from "./Resultat.style";
export function Resultat({status}){

    return (<>

        <View style={s.conteneurResulat}>
          <Text style={s.resultat}>{status}</Text>
        </View>
    </>);
}