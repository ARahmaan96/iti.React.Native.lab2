import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface props {
  title: String;
}

const TitleComponent = ({title}: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
});

export default TitleComponent;
