import { StyleSheet } from "react-native";
const COLORS = {
  lightprimary: "#5133a6",
  primary: "#312651",
  darkprimary: "#1d1126",
  mutedprimary: "#beb6d4",
  secondary: "#CF9FFF",
  tertiary: "#c2659e",

  gray: "#83829A",
  gray2: "#C1C0C8",
  gray3: "#c9c9c9",
  gray4: "#e8e8e8",
  darkgray: "#4a494a",

  red: "#FF073A",
  green: "#27AE60",

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
  small: 14,
  medium: 18,
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
    paddingVertical: SIZES.xLarge,
    paddingHorizontal: SIZES.xxLarge,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  divider:{
    flex: 1,
    height: 1,
    backgroundColor: '#C0C0C0',
    width: "100%", 
    marginBottom: 15,
    marginHorizontal: 10
  },
  verticalDivider: {
    width: 12,
    height: 30,
    backgroundColor: COLORS.tertiary,
    marginTop: -20,
    marginBottom: -5,
    alignSelf: "center",
  },
  fullcontainer: {
    paddingTop: 120,
  },
  contentContainer: {
    padding: SIZES.xLarge,
    backgroundColor: COLORS.primary,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    width: "100%",
  },
  flexRowStart: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  flexRowEnd: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
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
    backgroundColor: COLORS.tertiary,
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
  buttonSecondary: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    backgroundColor: COLORS.secondary,
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
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
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
    height: 12,
  },
  progressLabel: {
    minWidth: 90,
    fontSize: 12,
    color: "#000",
  },
  valueText: {
    position: "absolute",
    right: 5,
    color: COLORS.primary,
    fontSize: 9,
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
  mediumheader: {
    fontSize: SIZES.xLarge,
    color: COLORS.tertiary,
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
    fontSize: SIZES.medium,
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
    fontSize: SIZES.small,
    color: COLORS.tertiary,
    fontFamily: FONT.bold,
    marginBottom: 20,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(50, 50, 50, 0.9)',
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: SIZES.medium,
    shadowColor: "#1f1f1f",
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
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    borderRadius: SIZES.small,
    padding: SIZES.medium,
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    backgroundColor: COLORS.mutedprimary,
  },
  logo: {
    width: "80%",
    resizeMode: "contain",
    height: undefined,
    aspectRatio: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    color: COLORS.darkprimary,
    marginBottom: 15,
    textAlign: "center",
  },
  tableContainer: {
    borderRadius: 10,
    width: '100%',
    backgroundColor: COLORS.gray4,
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space between label and value
    paddingVertical: 5, // Space above and below each row
  },
  tableLabel: {
    fontSize: 16, // Label font size
    fontWeight: 'bold', // Make labels bold
    color: COLORS.darkprimary, // Label text color
  },
  tableValue: {
    fontSize: 16, // Value font size
    color: COLORS.darkprimary, // Value text color
  }
});

export { COLORS, FONT, SIZES, SHADOWS, STYLE };
