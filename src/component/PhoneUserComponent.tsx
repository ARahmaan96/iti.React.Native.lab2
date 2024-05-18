import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

interface IProps {
  title: String;
  image: ImageSourcePropType;
}

const PhoneUserComponent = ({title, image}: IProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
    marginLeft: 7,
  },
  text: {
    fontSize: 15,
  },
  image: {
    width: 45,
    height: 45,
  },
});

export default PhoneUserComponent;
