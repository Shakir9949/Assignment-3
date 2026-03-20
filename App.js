import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import store from "./redux/store";
import DashboardScreen from "./screens/DashboardScreen";
import BookingScreen from "./screens/BookingScreen";
import RoomListScreen from "./screens/RoomListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Booking" component={BookingScreen} />
          <Stack.Screen name="RoomList" component={RoomListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
