import { SafeAreaView, Text, StatusBar, View } from "react-native";
import InputGoal from "./InputGoal";
import Button from "./Button";
import GoalModal from "./Modal";
import { useState } from "react";
import Goals from "./Goals";

const Inex = () => {
  const currentSatatusHeight =
    Platform.OS === "android" && StatusBar.currentHeight;

  const [showModal, setShowModal] = useState(false);
  const [goals, setGolas] = useState([]);

  const onPress = () => {
    setShowModal(!showModal);
  };

  return (
    <SafeAreaView
      className="flex-1 bg-sky-600"
      style={{ marginTop: currentSatatusHeight }}
    >
      <Text className="text-2xl text-white text-center my-3 font-bold">
        Save Daily Goals
      </Text>
      <View className="mx-5">
        <Button onPress={onPress} />
        <GoalModal
          showModal={showModal}
          setShowModal={setShowModal}
          setGolas={setGolas}
        />
        <Text className="my-5 text-white text-2xl">Your Goals</Text>
        <Goals goals={goals} setGolas={setGolas} />
      </View>
    </SafeAreaView>
  );
};

export default Inex;
