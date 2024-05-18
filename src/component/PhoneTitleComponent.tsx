import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IProps {
  title: String;
}

const PhoneTitleComponent = ({title}: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#333',
  },
  text: {
    color: '#ddd',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PhoneTitleComponent;
