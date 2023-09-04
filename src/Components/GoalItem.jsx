import React from "react";
import { Pressable, Text, View } from "react-native";

const GoalItem = ({ goal, setGolas, goals }) => {
  const onPress = () => {
    const filteredGoals = goals.filter((item) => item.id !== goal.id);
    setGolas(filteredGoals);
  };

  return (
    <Pressable onPress={onPress}>
      <View className="p-3 bg-sky-950 my-2 rounded-md">
        <Text className="text-white text-1xl">{goal?.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;
