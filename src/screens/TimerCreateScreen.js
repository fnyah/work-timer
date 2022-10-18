import React, { useState, useRef } from "react";
import { View, Text, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

const TimerCreateScreen = ({ navigation }) => {
  const [selectedMinutes, setSelectedMinutes] = useState();
  const [shouldShowPicker, setShouldShowPicker] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const completeSelection = () => {
    console.log(selectedMinutes);
    setShouldShowPicker(false);
    setShowTime(true);
  };

  const hideTime = () => {
    setShowTime(false);
    setShouldShowPicker(true);
  };

  // function that saves timer information and passes it up to home screen
  const saveTimer = () => {
    const minutes = selectedMinutes;
    setSelectedMinutes(null);
    console.log(selectedMinutes);
    navigation.navigate("Home", minutes);
  };

  return (
    <>
      <Button title="Minutes" onPress={hideTime} />
      {shouldShowPicker ? (
        <Picker
          selectedValue={selectedMinutes}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedMinutes(itemValue)
          }
        >
          {[...Array(61).keys()].map((item) => (
            <Picker.Item label={item.toString()} value={item.toString()} />
          ))}
        </Picker>
      ) : null}

      {shouldShowPicker ? (
        <Button title="Select" onPress={completeSelection} />
      ) : null}

      {showTime ? <Text>{selectedMinutes}</Text> : null}

      <Button title="Create Timer" onPress={saveTimer} />
    </>
  );
};

export default TimerCreateScreen;
