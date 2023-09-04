import React from "react";
import { FlatList, Text, View } from "react-native";
import GoalItem from "./GoalItem";

const Goals = ({ goals, setGolas }) => {
  return (
    <FlatList
      data={goals}
      renderItem={(item) => (
        <GoalItem goal={item.item} setGolas={setGolas} goals={goals} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default Goals;
