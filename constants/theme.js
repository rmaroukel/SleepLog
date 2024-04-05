import { StyleSheet } from "react-native";
const COLORS = {
  primary: "#312651",
  secondary: "#CF9FFF",
  tertiary: "#F3C778",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xxSmall: 8,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 52,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const STYLE = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.xLarge,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  input: {
    width: "80%",
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: SIZES.xxSmall,
    backgroundColor: COLORS.white,
    color: COLORS.primary,
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  button: {
    fontFamily: FONT.medium,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    padding: SIZES.medium,
  },
  buttontext: {
    fontFamily: FONT.small,
    color: COLORS.primary,
  },
  welcomeText: {
    fontSize: SIZES.xxLarge,
    color: COLORS.white,
    fontFamily: FONT.bold,
    marginBottom: 40,
    textAlign: "center",
  },
  header: {
    fontSize: SIZES.large,
    color: COLORS.white,
    fontFamily: FONT.bold,
    marginBottom: SIZES.large,
  },
  infoText: {
    fontSize: SIZES.large,
    color: COLORS.secondary,
    fontFamily: FONT.regular,
    marginBottom: 60,
    textAlign: "center",
  },
  calltoaction: {
    fontSize: SIZES.large,
    color: COLORS.tertiary,
    fontFamily: FONT.bold,
    marginBottom: 40,
    textAlign: "center",
  },
});

export { COLORS, FONT, SIZES, SHADOWS, STYLE };
