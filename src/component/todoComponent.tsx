import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface IProps {
  todo: TodoType;
  removeTodo: (id: string) => void;
  toggleDone: (id: string) => void;
}

const TodoComponent = ({todo, removeTodo, toggleDone}: IProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          todo.done ? {textDecorationLine: 'line-through'} : {},
        ]}>
        {todo?.title}
      </Text>

      <View style={styles.done}>
        <BouncyCheckbox
          size={25}
          fillColor="#2F7CFF"
          unFillColor="#FFFFFF"
          text="Done"
          textStyle={styles.BouncyCheckbox}
          innerIconStyle={{borderWidth: 2}}
          onPress={(isChecked: boolean) => {
            toggleDone(todo?.id);
            console.log(isChecked);
          }}
        />
      </View>
      <View style={styles.deleteBtnContainer}>
        <Text style={styles.deleteBtn} onPress={() => removeTodo(todo.id)}>
          Delete
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 7,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 0.33,
    fontSize: 20,
    color: '#333',
  },
  done: {
    flex: 0.33,
  },
  BouncyCheckbox: {
    color: '#333',
    fontSize: 20,
    textDecorationLine: 'none',
  },
  deleteBtnContainer: {
    flex: 0.33,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteBtn: {
    color: '#fff',
    backgroundColor: '#DC3545',
    borderRadius: 7,
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontSize: 20,
  },
});

export default TodoComponent;
