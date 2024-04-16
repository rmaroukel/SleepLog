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
  flexRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    width: "100%",
  },
  flexColumn: {
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "100%",
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
  dateinput: {
    width: "100%",
    paddingHorizontal: SIZES.small,
    paddingVertical: 12,
    borderRadius: SIZES.xSmall,
    backgroundColor: COLORS.secondary,
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  datecard: {
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    elevation: 0,
  },
  button: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    padding: SIZES.medium,
    alignContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  buttonDisabled: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.small,
    padding: SIZES.medium,
    alignContent: "center",
    alignItems: "center",
  },
  buttontext: {
    fontFamily: FONT.small,
    color: COLORS.primary,
  },
  buttontextDisabled: {
    fontFamily: FONT.small,
    color: COLORS.gray,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
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
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  progressBar: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    height: 20,
  },
  progressLabel: {
    minWidth: 110,
    fontSize: 16,
    color: "#000",
  },
  valueText: {
    position: "absolute",
    right: 5,
    color: COLORS.primary,
  },
  label: {
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
  list: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  calltoaction: {
    fontSize: SIZES.large,
    color: COLORS.tertiary,
    fontFamily: FONT.bold,
    marginBottom: 40,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export { COLORS, FONT, SIZES, SHADOWS, STYLE };
