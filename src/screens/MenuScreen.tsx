import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../constants/styles";
import { categories } from "../constants/categories";
import StepSelector from "../components/StepSelector";

export default function Menu(props) {
  const [currentPage, setCurrentPage] = useState(0);

  const onStepPress = (position: number) => {
    setCurrentPage(position);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>What style of questions?</Text>
      <Image
        source={require("../assets/categories/dance.png")}
        style={{ width: 40, height: 40 }}
      />
      <Text style={styles.paragraph}>{categories[currentPage].name}</Text>
      <StepSelector
        onPress={(e) => onStepPress(e)}
        currentPosition={currentPage}
        stepCount={4}
      />
      <Text style={styles.paragraph}>
        {categories[currentPage].description}
      </Text>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Question")}>
          <Text style={styles.button}>Begin!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
