import React from "react";
import { StyleSheet, View, Text } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { color } from "../constants/themes";
import { useAppContext } from "../store";

interface Props {
  stepCount: number;
  currentPosition: number;
  onPress: (step: number) => void;
}

export default function StepSelector(props: Props) {
  const [state, dispatch] = useAppContext();

  const theme = color(state.theme);

  const thirdIndicatorStyles = {
    stepIndicatorSize: 35,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3.5,
    currentStepStrokeWidth: 3.5,
    stepStrokeCurrentColor: theme("primary", "secondary"),
    stepStrokeWidth: 3.5,
    stepStrokeFinishedColor: theme("primary", "secondary"),
    stepStrokeUnFinishedColor: theme("primary", "secondary"),
    separatorFinishedColor: theme("primary", "secondary"),
    separatorUnFinishedColor: theme("primary", "secondary"),
    stepIndicatorFinishedColor: theme("background"),
    stepIndicatorUnFinishedColor: theme("background"),
    stepIndicatorCurrentColor: theme("tertiary", "primary"),
    stepIndicatorLabelCurrentColor: "transparent",
    stepIndicatorLabelFinishedColor: "transparent",
    stepIndicatorLabelUnFinishedColor: "transparent",
  };

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
