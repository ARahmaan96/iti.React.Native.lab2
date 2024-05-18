import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';
import AddTodoComponent from '../component/addTodoComponent';
import TodoListComponent from '../component/todoListComponent';

const TodoListPage = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (title: string) =>
    setTodos([{id: uuid.v4().toString(), title, done: false}, ...todos]);
  const removeTodo = (id: string) =>
    setTodos(todos.filter(todo => todo.id !== id));
  const toggleDone = (id: string) =>
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      }),
    );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>My ToDo List</Text>
      </View>
      <View style={styles.addTodoContainer}>
        <AddTodoComponent addTodo={addTodo} />
      </View>
      <View style={styles.todosContainer}>
        <TodoListComponent
          todos={todos}
          removeTodo={removeTodo}
          toggleDone={toggleDone}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#555',
    flex: 1,
    display: 'flex',
    gap: 15,
  },
  headerContainer: {
    backgroundColor: '#333',
    paddingVertical: 15,
  },
  header: {
    color: '#ddd',
    fontSize: 25,
    textAlign: 'center',
  },
  addTodoContainer: {
    paddingHorizontal: 10,
  },
  todosContainer: {},
});

export default TodoListPage;
