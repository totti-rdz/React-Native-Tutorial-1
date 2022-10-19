import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const showModal = () => setModalIsVisible(true);
  const closeModal = () => setModalIsVisible(false);

  const addGoalHandler = (input) => {
    if (input) {
      setGoals((current) => [...current, { text: input, id: Date.now() + Math.random().toString() }]);
      closeModal();
    }
  };

  const deleteGoalHandler = (id) => {
    setGoals((current) => current.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add new goal" color={"#a065ec"} onPress={showModal} />
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onClose={closeModal} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            alwaysBounceVertical={false}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => {
              return <GoalItem item={itemData.item} onPress={deleteGoalHandler} />;
            }}
          ></FlatList>
          <View style={{ marginVertical: 20 }}>
            <Button
              title="reset"
              onPress={() => {
                setGoals([]);
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
