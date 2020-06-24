import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const colorNightPrimary = "#b5c1ff";
export const colorNightSecondary = "#fff";
export const colorNightBackground = "#333";
const fontScale8 = 3.5 * 16;
const fontScale7 = 3 * 16;
const fontScale6 = 2.4 * 16;
const fontScale5 = 2 * 16;
const fontScale4 = 1.75 * 16;
const fontScale3 = 1.65 * 16;
const fontScale2 = 1.5 * 16;
const fontScale1 = 1.4 * 16;

const styles = StyleSheet.create({
  colorPrimary: {
    color: colorNightPrimary,
  },
  colorSecondary: {
    color: colorNightSecondary,
  },
  colorBackground: {
    backgroundColor: colorNightBackground,
  },
  fontSize1: {
    fontSize: fontScale1,
  },
  fontSize2: {
    fontSize: fontScale2,
  },
  fontSize3: {
    fontSize: fontScale3,
  },
  fontSize4: {
    fontSize: fontScale4,
  },
  fontSize5: {
    fontSize: fontScale5,
  },
  fontSize6: {
    fontSize: fontScale6,
  },
  fontSize7: {
    fontSize: fontScale7,
  },
  fontSize8: {
    fontSize: fontScale8,
  },
  fontBold: {
    fontWeight: "bold",
  },
  textCenter: {
    textAlign: "center",
  },
  marginT0: {
    marginTop: 0,
  },
  marginT1p5: {
    marginTop: "1.5vh",
  },
  marginT4: {
    marginTop: "4vh",
  },
  marginB4: {
    marginBottom: "4vh",
  },
  margin0: {
    margin: 0,
  },
  marginV2: {
    marginVertical: "2vh",
  },
  marginHCenter: {
    marginHorizontal: "auto",
  },
  marginH16: {
    marginHorizontal: "16vw",
  },
  marginB2: {
    marginBottom: "2vh",
  },
  paddingBVW4: {
    paddingBottom: "4vw",
  },
  paddingT1: {
    paddingTop: "1vh",
  },
  paddingT3: {
    paddingTop: "3vh",
  },
  paddingT5: {
    paddingTop: "5vh",
  },
  paddingH5: {
    paddingHorizontal: "5vw",
  },
  paddingH6: {
    paddingHorizontal: "6vw",
  },
  paddingV2: {
    paddingVertical: "2vh",
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  top: {
    position: "relative",
    paddingHorizontal: "6vw",
    top: "1vh",
    display: "flex",
    flexDirection: "column",
  },
  bottom: {
    paddingVertical: "1.5rem",
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  topP: {
    marginTop: "1.5vh",
  },
  selectP: {
    fontSize: fontScale8,
    marginHorizontal: "16vw",
  },
  button: {
    color: colorNightPrimary,
    backgroundColor: "transparent",
    paddingVertical: 12.8,
    paddingHorizontal: 56,
    overflow: "hidden",
    borderRadius: 14,
    borderWidth: 5,
    borderColor: colorNightPrimary,
  },
});

export default styles;
