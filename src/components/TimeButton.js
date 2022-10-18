import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TimeButton = ({ minutes }) => {
  const [pressed, setPressed] = useState(false);

  console.log(minutes);

  const callFuncs = () => {
    if (pressed) {
      console.log(pressed);
      setPressed(false);
    } else {
      startCountDown(minutes);
      setPressed(true);
    }
  };

  // countdown function taking time as a parameter
  const startCountDown = (time) => {
    let timeLeft = time;
    let interval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        console.log(timeLeft);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => callFuncs()}>
        <View style={styles.btnBackground}>
          {!pressed ? (
            <Text style={styles.btnText}>{minutes} Minutes</Text>
          ) : pressed && minutes == 0 ? (
            <Text style={styles.btnText}>Reset</Text>
          ) : (
            <Text style={styles.btnText}>Cancel</Text>
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
