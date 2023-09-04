import { Button, Pressable, Text, View } from "react-native";

const GoalButton = ({ onPress }) => {
  return (
    <View className="rounded-lg">
      <Pressable className="rounded-lg bg-sky-400 p-4" onPress={onPress}>
        <Text className="text-2xl text-white text-center">Add new goal</Text>
      </Pressable>
    </View>
  );
};

export default GoalButton;
