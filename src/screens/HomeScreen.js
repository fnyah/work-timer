import * as React from "react";
import { Button, View, Text } from "react-native";
import TimeButton from "../components/TimeButton";

function HomeScreen({ route, navigation }) {
  const minutes = route.params;
  const timers = []

    // pass minutes as props to timer component 
    // and add to timers array



  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Create a timer"
        onPress={() => navigation.navigate("CreateTimer")}
      />
      {minutes ? <Text>{minutes}</Text> : null}
    <TimeButton minutes={minutes} />
    </View>
  );
}

export default HomeScreen;
