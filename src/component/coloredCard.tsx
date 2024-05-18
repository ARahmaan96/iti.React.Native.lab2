import React from 'react';
import {ColorValue, StyleSheet, Text, View} from 'react-native';

interface IPrpops {
  title: String;
  bgColor: ColorValue;
}

const ColoredCard = ({title, bgColor}: IPrpops) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={styles.text}>{`${title} ${bgColor.toString()}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: 5,
    borderRadius: 7,
    display: 'flex',
    alignItems: 'center',
    borderColor: '#333',
    borderWidth: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ddd',
    textShadowColor: '#333',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
  },
});

export default ColoredCard;
