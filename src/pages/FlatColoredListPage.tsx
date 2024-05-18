import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TitleComponent from '../component/titleComponent';
import ColoredCard from '../component/coloredCard';

const FlatColoredList = () => {
  const COLORS = [
    {colorName: 'Base03', hexCode: '#002b36'},
    {colorName: 'Base02', hexCode: '#073642'},
    {colorName: 'Base01', hexCode: '#586e75'},
    {colorName: 'Base00', hexCode: '#657b83'},
    {colorName: 'Base0', hexCode: '#839496'},
    {colorName: 'Base1', hexCode: '#93a1a1'},
    {colorName: 'Base2', hexCode: '#eee8d5'},
    {colorName: 'Base3', hexCode: '#fdf6e3'},
    {colorName: 'Yellow', hexCode: '#b58900'},
    {colorName: 'Orange', hexCode: '#cb4b16'},
    {colorName: 'Red', hexCode: '#dc322f'},
    {colorName: 'Magenta', hexCode: '#d33682'},
    {colorName: 'Cyan', hexCode: '#2aa198'},
    {colorName: 'Green', hexCode: '#859900'},
  ];

  return (
    <View style={styles.container}>
      <TitleComponent title={'Here are some boxes of different colours'} />
      <FlatList
        data={COLORS}
        renderItem={({item}) => (
          <ColoredCard title={item.colorName} bgColor={item.hexCode} />
        )}
        keyExtractor={item => item.hexCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    paddingBottom: 30,
  },
});

export default FlatColoredList;
