import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  case: {
    backgroundColor: "#fff",
    borderWidth: 3.5,
    width: 100,
    height: 100,
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#0074a6',
    borderTopColor:"#0074a6",
    borderRightColor:"#0074a6",
    borderLeftColor:"#0074a6",

  },
  text: {
    color: 'currentColor', // This will use the default text color
    fontSize: 32, // 2em equivalent (assuming 16px = 1em)
    textAlign: 'center',// Ensure the text is vertically centered
  },
});
