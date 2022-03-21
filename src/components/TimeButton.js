import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TimeButton = ({ minutes, startCountDown, endCountDown, timeState }) => {
  const [pressed, setPressed] = useState(false);

  const textValue = "Cancel";

  const callFuncs = () => {
    if (pressed) {
      console.log(pressed);
      setPressed(false);
      endCountDown();
    } else {
      startCountDown(minutes);
      setPressed(true);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => callFuncs()}>
        <View style={styles.btnBackground}>
          {!pressed ? (
            <Text style={styles.btnText}>{minutes} Minutes</Text>
          ) : pressed && timeState == 0 ? (
            <Text style={styles.btnText}>Reset</Text>
          ) : (
            <Text style={styles.btnText}>{textValue}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnBackground: {
    backgroundColor: "#6397ff",
    height: 50,
    width: 150,
    borderRadius: 15,
    justifyContent: "center",
    margin: 10,
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default TimeButton;
