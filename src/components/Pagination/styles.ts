import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },

  button: {
    marginHorizontal: 16,
  },
  
  buttonText: {
    color: THEME.COLORS.TEXT_SECONDARY,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM
  },

  currentPage: {
    color: THEME.COLORS.TEXT_SECONDARY,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM
  },

  disabled: {
    
  }
});