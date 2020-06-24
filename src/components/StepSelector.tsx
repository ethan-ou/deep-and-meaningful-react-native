import React from "react";
import { StyleSheet, View, Text } from "react-native";
import StepIndicator from "react-native-step-indicator";
import {
  colorNightBackground,
  colorNightSecondary,
  colorNightPrimary,
} from "../constants/styles";

const thirdIndicatorStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: colorNightSecondary,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: colorNightSecondary,
  stepStrokeUnFinishedColor: colorNightSecondary,
  separatorFinishedColor: colorNightSecondary,
  separatorUnFinishedColor: colorNightSecondary,
  stepIndicatorFinishedColor: colorNightBackground,
  stepIndicatorUnFinishedColor: colorNightBackground,
  stepIndicatorCurrentColor: colorNightPrimary,
  stepIndicatorLabelCurrentColor: "transparent",
  stepIndicatorLabelFinishedColor: "transparent",
  stepIndicatorLabelUnFinishedColor: "transparent",
};

interface Props {
  stepCount: number;
  currentPosition: number;
  onPress: (step: number) => void;
}

export default function StepSelector(props: Props) {
  return (
    <>
      <StepIndicator
        stepCount={props.stepCount}
        customStyles={thirdIndicatorStyles}
        currentPosition={props.currentPosition}
        onPress={props.onPress}
      />
    </>
  );
}
