import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    marginTop: 8,
    marginBottom: 16
  },

  input: {
    flex: 1,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TEXT_200,
  },

  button: {

  },
});