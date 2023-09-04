import { useState } from "react";
import { TextInput, Pressable, View, Text } from "react-native";

const InputGoal = ({ showModal, setShowModal, setGolas }) => {
  const [text, setText] = useState("");

  const onPress = () => {
    setGolas((prevGoals) => [...prevGoals, { id: Math.random(), text: text }]);
    setShowModal(!showModal);
  };

  const onCancel = () => {
    setShowModal(!showModal);
  };
  return (
    <View className=" mt-5  bg-sky-900 flex-1">
      <View className="flex-row space-x-3 mt-3 mx-3">
        <TextInput
          className="bg-sky-400 px-4 rounded-md p-4 text-white text-2xl flex-1"
          placeholder="Write your goal..."
          placeholderTextColor="#fff"
          onChangeText={setText}
          value={text}
        />
      </View>

      <View className="flex-row items-center justify-center mt-5 space-x-3">
        <View className="rounded-lg">
          <Pressable className="rounded-lg bg-sky-400 p-4" onPress={onPress}>
            <Text className="text-2xl text-white text-center">Add Goal</Text>
          </Pressable>
        </View>
        <View className="rounded-lg">
          <Pressable className="rounded-lg bg-red-500 p-4" onPress={onCancel}>
            <Text className="text-2xl text-white text-center">Cancel</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default InputGoal;
