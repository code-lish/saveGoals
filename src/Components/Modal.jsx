import { Modal, Text } from "react-native";
import InputGoal from "./InputGoal";

const GoalModal = ({ showModal, setShowModal, setGolas }) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <InputGoal
        showModal={showModal}
        setShowModal={setShowModal}
        setGolas={setGolas}
      />
    </Modal>
  );
};

export default GoalModal;
