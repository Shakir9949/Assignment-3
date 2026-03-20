import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addBooking } from "../redux/actions";

const BookingScreen = ({ route }) => {
  const { people } = route.params;
  const dispatch = useDispatch();

  const rooms = [
    { roomNumber: "A101", capacity: 5, available: true },
    { roomNumber: "A102", capacity: 10, available: false },
    { roomNumber: "A103", capacity: 8, available: false },
    { roomNumber: "A104", capacity: 10, available: true },
    { roomNumber: "A105", capacity: 7, available: true },
  ];

  const [message, setMessage] = useState("");

  const handleBooking = (room) => {
    if (!room.available) {
      setMessage("Room not available ❌");
      return;
    }

    if (room.capacity < people) {
      setMessage("Room not big enough ❌");
      return;
    }

    dispatch(addBooking(room));
    setMessage("Room booked successfully ✅");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Screen</Text>
      <Text>People: {people}</Text>

      <FlatList
        data={rooms}
        keyExtractor={(item) => item.roomNumber}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Room: {item.roomNumber}</Text>
            <Text>Capacity: {item.capacity}</Text>
            <Text>Available: {item.available ? "Yes" : "No"}</Text>

            <Button title="Book Room" onPress={() => handleBooking(item)} />
          </View>
        )}
      />

      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 10 },
  card: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
  message: { marginTop: 20, fontSize: 16 },
});

export default BookingScreen;
