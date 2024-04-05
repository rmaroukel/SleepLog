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
  fullcontainer: {
    paddingTop: 120,
  },
  contentContainer: {
    padding: SIZES.xLarge,
    backgroundColor: COLORS.primary,
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
  questioninput: {
    width: "100%",
    paddingHorizontal: SIZES.small,
    paddingVertical: 12,
    borderRadius: SIZES.xSmall,
    backgroundColor: COLORS.white,
    color: COLORS.primary,
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  button: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    padding: SIZES.medium,
    alignContent: "center",
    alignItems: "center",
  },
  buttontext: {
    fontFamily: FONT.small,
    color: COLORS.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  choiceButton: {
    backgroundColor: COLORS.gray2,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: SIZES.xxSmall,
  },
  selected: {
    color: COLORS.primary,
    backgroundColor: COLORS.tertiary,
  },
  choiceText: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
  },
  label:{
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    marginBottom: 10,
    textAlign: "center",

  },
  largeheader: {
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
  question: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.small,
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
