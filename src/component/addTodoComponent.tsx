import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface IProps {
  addTodo: (title: string) => void;
}

const AddTodoComponent = ({addTodo}: IProps) => {
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string>('');

  const addTodoHandelar = () => {
    if (title.length < 3) {
      setError('Todo Length must be grater than 3!');
      return;
    }
    addTodo(title);
    setTitle('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.todoInput}
          value={title}
          onChangeText={value => {
            setError('');
            setTitle(value);
          }}
        />
        <Text style={styles.addBtn} onPress={addTodoHandelar}>
          Add
        </Text>
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {display: 'flex', gap: 10},
  inputcontainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    gap: 10,
  },
  todoInput: {
    flex: 1,
    color: '#333',
    backgroundColor: '#ddd',
    fontSize: 20,
    borderRadius: 7,
    paddingHorizontal: 10,
  },
  addBtn: {
    backgroundColor: '#2F7CFF',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    verticalAlign: 'middle',
    fontSize: 20,
    cursor: 'pointer',
  },
  error: {
    textAlign: 'center',
    color: '#D33242',
    fontSize: 20,
  },
});

export default AddTodoComponent;
