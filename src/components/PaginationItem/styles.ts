import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
  },

  selected: {
    backgroundColor: THEME.COLORS.PRIMARY,
  },

  text: {
    fontSize: 12,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT_200,
  },
});