import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TimeButton = ({ minutes, startCountDown, endCountDown, timeState }) => {
  const [pressed, setPressed] = useState(false);


    // function that takes time as a parameter and stores it in an array
    const storeTime = (time) => {
        let timeArray = [];
        timeArray.push(time);
        console.log(timeArray);
    }

    // function that prompts the user for text input
    const promptUser = () => {
        let text = prompt("Enter text here");
        console.log(text);
    }


  callFuncs = () => {
    if (pressed) {  
        promptUser();
    } else {
      setPressed(true);
    }
  };


  return (
    <View>
      <TouchableOpacity onPress={() => callFuncs()}>
        <View style={styles.btnBackground}>
          <Text style={styles.btnText}>New Timer</Text>
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
