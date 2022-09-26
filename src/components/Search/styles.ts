import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: THEME.COLORS.BACKGROUND_SECONDARY,
    marginVertical: 16,
  },

  input: {
    flex: 1,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TEXT_SECONDARY,
  },

  button: {

  },
});