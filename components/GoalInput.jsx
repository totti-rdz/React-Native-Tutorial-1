import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ onAddGoal, visible, onClose }) => {
  const [input, setInput] = useState("");

  const goalInputHandler = (input) => {
    setInput(input);
  };

  const addGoalHandler = () => {
    onAddGoal(input);
    setInput("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/goal.png")} style={styles.image} />
        <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} value={input} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onClose} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
      <Button title="Close" onPress={onClose} />
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#311b6b",
  },
  image: { width: 100, height: 100, margin: 20 },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});
