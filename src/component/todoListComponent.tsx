import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TodoComponent from './todoComponent';

interface IProps {
  todos: TodoType[];
  removeTodo: (id: string) => void;
  toggleDone: (id: string) => void;
}

const TodoListComponent = ({todos, removeTodo, toggleDone}: IProps) => {
  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({item: todo}) => (
          <TodoComponent
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleDone={toggleDone}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TodoListComponent;
