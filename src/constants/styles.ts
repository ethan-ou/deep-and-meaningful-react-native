import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

export const vw = (number: number) =>
  Dimensions.get("window").width * (number / 100);
export const vh = (number: number) =>
  Dimensions.get("window").height * (number / 100);
export const vmin = (number: number) =>
  Math.min(
    Dimensions.get("window").width * (number / 100),
    Dimensions.get("window").height * (number / 100)
  );
export const vmax = (number: number) =>
  Math.max(
    Dimensions.get("window").width * (number / 100),
    Dimensions.get("window").height * (number / 100)
  );

const fontScale8 = 3.5 * 16;
const fontScale7 = 3 * 16;
const fontScale6 = 2.4 * 16;
const fontScale5 = 2 * 16;
const fontScale4 = 1.75 * 16;
const fontScale3 = 1.65 * 16;
const fontScale2 = 1.5 * 16;
const fontScale1 = 1.4 * 16;

const styles = StyleSheet.create({
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
  marginT1: {
    marginTop: vh(1),
  },
  marginT1p5: {
    marginTop: vh(1.5),
  },
  marginT3: {
    marginTop: vh(3),
  },
  marginT4: {
    marginTop: vh(4),
  },
  marginB4: {
    marginBottom: vh(4),
  },
  margin0: {
    margin: 0,
  },
  marginV2: {
    marginVertical: vh(2),
  },
  marginH1: {
    marginHorizontal: vw(1),
  },
  marginH12: {
    marginHorizontal: vw(12),
  },
  marginH16: {
    marginHorizontal: vw(16),
  },
  marginB2: {
    marginBottom: vh(2),
  },
  paddingBVW4: {
    paddingBottom: vw(4),
  },
  paddingT1: {
    paddingTop: vh(1),
  },
  paddingT3: {
    paddingTop: vh(3),
  },
  paddingT5: {
    paddingTop: vh(5),
  },
  paddingH5: {
    paddingHorizontal: vw(5),
  },
  paddingH6: {
    paddingHorizontal: vw(6),
  },
  paddingV2: {
    paddingVertical: vh(2),
  },
  padding3vh: {
    padding: vh(3),
  },
  alignCenter: {
    alignItems: "center",
  },
  height2: {
    height: vh(2),
  },
  height4: {
    height: vh(4),
  },
  height5: {
    height: vh(5),
  },
  height6: {
    height: vh(6),
  },
  height12: {
    height: vh(12),
  },
  height14: {
    height: vh(14),
  },
  height15: {
    height: vh(15),
  },
  width5h: {
    width: vh(5),
  },
  width6h: {
    width: vh(6),
  },
  width7h: {
    width: vh(7),
  },
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  top: {
    position: "relative",
    paddingHorizontal: vw(6),
    top: vh(1),
    display: "flex",
    flexDirection: "column",
  },
  bottom: {
    paddingVertical: 24,
    position: "absolute",
    bottom: 0,
    width: vw(100),
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingVertical: 12.8,
    paddingHorizontal: 56,
    textAlignVertical: "center",
    borderRadius: 14,
  },
});

export default styles;
