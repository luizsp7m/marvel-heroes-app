import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {

  },

  image: {
    width: 150,
    height: 200,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "flex-end",
  },

  footer: {
    justifyContent: "flex-end",
    height: 100,
    padding: 12,
  },
  
  text: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TEXT_200,
  }
});