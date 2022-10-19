import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, onPress }) => {
  const pressHandler = () => {
    onPress(item.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
