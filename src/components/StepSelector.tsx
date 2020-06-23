import React from "react";
import { StyleSheet, View, Text } from "react-native";

import StepIndicator from "react-native-step-indicator";

const thirdIndicatorStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#fff",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#fff",
  stepStrokeUnFinishedColor: "#fff",
  separatorFinishedColor: "#fff",
  separatorUnFinishedColor: "#fff",
  stepIndicatorFinishedColor: "#1a1a1a",
  stepIndicatorUnFinishedColor: "#1a1a1a",
  stepIndicatorCurrentColor: "#b5c1ff",
  stepIndicatorLabelCurrentColor: "transparent",
  stepIndicatorLabelFinishedColor: "transparent",
  stepIndicatorLabelUnFinishedColor: "transparent",
};

export default function StepSelector(props) {
  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          stepCount={props.stepCount}
          customStyles={thirdIndicatorStyles}
          currentPosition={props.currentPosition}
          onPress={props.onPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepIndicator: {
    marginVertical: 5,
  },
});
