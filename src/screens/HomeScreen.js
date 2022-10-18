import React, { useState } from "react";
import { Button, View, Text, FlatList, TouchableOpacity } from "react-native";
import TimeButton from "../components/TimeButton";

function HomeScreen({ route, navigation }) {
  const minutes = route.params;
  
  const [timers, setTimers] = useState([
    { id: 1, minutes: 5 },
    { id: 2, minutes: 10 },
  ]);

  // function that removes a timer from the timers array by id
  const removeTimer = (id) => {
    setTimers((prevTimers) => {
      return prevTimers.filter((timer) => timer.id != id);
    });
  };

  const renderItem = ({ item }) => (
    <View>
      <TimeButton minutes={item.minutes} />
      <TouchableOpacity onPress={() => removeTimer(item.id)}>
        <Text>delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Create a timer"
        onPress={() => navigation.navigate("CreateTimer")}
      />
      {minutes ? <Text>{minutes}</Text> : null}
      <FlatList
        keyExtractor={(item) => item.id}
        data={timers}
        renderItem={renderItem}
      />
    </View>
  );
}

export default HomeScreen;
