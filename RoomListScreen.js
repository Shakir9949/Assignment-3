import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deleteBooking } from "../redux/actions";

const RoomListScreen = () => {
  const bookedRooms = useSelector((state) => state.bookedRooms);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booked Rooms</Text>

      <FlatList
        data={bookedRooms}
        keyExtractor={(item) => item.roomNumber}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Room: {item.roomNumber}</Text>
            <Text>Capacity: {item.capacity}</Text>

            <Button
              title="Delete"
              onPress={() => dispatch(deleteBooking(item.roomNumber))}
            />
          </View>
        )}
      />
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
});

export default RoomListScreen;
