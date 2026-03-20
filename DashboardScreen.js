import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const DashboardScreen = ({ navigation }) => {
  const [people, setPeople] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter number of people"
        keyboardType="numeric"
        value={people}
        onChangeText={(text) => setPeople(text)}
      />

      <Button
        title="Go to Booking"
        onPress={() =>
          navigation.navigate("Booking", { people: parseInt(people) })
        }
      />

      <Button
        title="View Booked Rooms"
        onPress={() => navigation.navigate("RoomList")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20 },
});

export default DashboardScreen;
