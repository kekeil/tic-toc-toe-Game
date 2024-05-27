import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"space-evenly",
    backgroundColor: "#242730",
    padding:20,
    
  },
  titre: {
    
   color:"white",
    fontSize:40,
    textAlign:"center",
    marginTop:20,
  },
  tableau: {
    width:300,
    height:300,
    backgroundColor:"white",
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  
  
  subtitle:{
    fontSize:20,
    color:"#ABABAB",
    textAlign:"center"
}}
);
