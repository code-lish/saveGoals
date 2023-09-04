import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar as RNStatusBar,
} from "react-native";
import Inex from "./src/Components/Inex";

const App = () => {
  return (
    <>
      <Inex />

      <StatusBar style="auto" />
    </>
  );
};

export default App;
