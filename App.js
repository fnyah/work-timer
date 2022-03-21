import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import TimeButton from "./src/components/TimeButton";
import * as Speech from "expo-speech";
var moment = require("moment");
moment().format();

const voiceOptions = {
  language: "en",
  quality: "enhanced",
};

let timeValue; // used to keep track of timer

export default function App() {
  const [countDownTime, setCountDownTime] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const countDown = (time) => {
    setCountDownTime(time);
    timeValue = setInterval(() => {
      time = time - 1;
      setCountDownTime((countDownTime) => time);
      if (time <= 0) {
        getTime();
        if (isEnabled) {
          countDown();
        }
        endTimer();
      }
    }, 1000);
  };

  const endTimer = () => {
    clearInterval(timeValue);
    console.log("timer ended");
    setCountDownTime(0);
  };

  const getTime = () => {
    const time = moment().format("hh:mm A");
    Speech.speak(`The current time is ${time}`, voiceOptions);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{countDownTime}</Text>
      <TimeButton
        timeState={countDownTime}
        startCountDown={countDown}
        endCountDown={endTimer}
        minutes={5}
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Repeat timer: </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 40,
    fontWeight: "bold",
    padding: 10,
  },
  switchContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignContent: "center",
  },
  switchText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 5,
  },
});
