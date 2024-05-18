import React from 'react';
import {ImageSourcePropType, SectionList, StyleSheet, View} from 'react-native';
import PhoneTitleComponent from '../component/PhoneTitleComponent';
import PhoneUserComponent from '../component/PhoneUserComponent';

const imagePaths: {[key: string]: any} = {
  './../assets/img_1.png': require('./../assets/img_1.png'),
  './../assets/img_2.png': require('./../assets/img_2.png'),
  './../assets/img_3.png': require('./../assets/img_3.png'),
  './../assets/img_4.png': require('./../assets/img_4.png'),
  './../assets/img_5.png': require('./../assets/img_5.png'),
  './../assets/img_6.png': require('./../assets/img_6.png'),
  './../assets/img_7.png': require('./../assets/img_7.png'),
  './../assets/img_8.png': require('./../assets/img_8.png'),
  './../assets/img_9.png': require('./../assets/img_9.png'),
};

const DATA = [
  {
    id: 0,
    title: 'A',
    data: [
      {id: 0, name: 'Alaa Mahmoud', img: './../assets/img_1.png'},
      {id: 1, name: 'Ahmed Samy', img: './../assets/img_2.png'},
      {id: 2, name: 'Arwa Mostafa', img: './../assets/img_3.png'},
      {id: 3, name: 'Amal Salah', img: './../assets/img_4.png'},
    ],
  },
  {
    id: 1,
    title: 'B',
    data: [
      {id: 0, name: 'Basma Ali', img: './../assets/img_5.png'},
      {id: 1, name: 'Badr Ezzat', img: './../assets/img_6.png'},
      {id: 2, name: 'Bilal Kamal', img: './../assets/img_7.png'},
    ],
  },
  {
    id: 2,
    title: 'C',
    data: [
      {id: 0, name: 'Cairo Mohamed', img: './../assets/img_8.png'},
      {id: 1, name: 'Celine Adel', img: './../assets/img_9.png'},
    ],
  },
  {
    id: 3,
    title: 'D',
    data: [
      {id: 0, name: 'Dalia Ibrahim', img: './../assets/img_1.png'},
      {id: 1, name: 'Diaa Kamal', img: './../assets/img_2.png'},
    ],
  },
  {
    id: 4,
    title: 'E',
    data: [
      {id: 0, name: 'Essam Said', img: './../assets/img_3.png'},
      {id: 1, name: 'Enas Ahmed', img: './../assets/img_4.png'},
    ],
  },
  {
    id: 5,
    title: 'F',
    data: [
      {id: 0, name: 'Farida Hassan', img: './../assets/img_1.png'},
      {id: 1, name: 'Fatima Ahmed', img: './../assets/img_3.png'},
      {id: 2, name: 'Fouad Youssef', img: './../assets/img_5.png'},
    ],
  },
  {
    id: 6,
    title: 'G',
    data: [
      {id: 0, name: 'Gamal Abdel Nasser', img: './../assets/img_7.png'},
      {id: 1, name: 'Gehan Sadat', img: './../assets/img_9.png'},
      {id: 2, name: 'Ghada Abdel Razek', img: './../assets/img_2.png'},
    ],
  },
  {
    id: 7,
    title: 'H',
    data: [
      {id: 0, name: 'Hassan El Shafei', img: './../assets/img_4.png'},
      {id: 1, name: 'Heba El Sisy', img: './../assets/img_6.png'},
      {id: 2, name: 'Hend Sabry', img: './../assets/img_8.png'},
    ],
  },
  {
    id: 8,
    title: 'I',
    data: [
      {id: 0, name: 'Ibrahim El Hakami', img: './../assets/img_1.png'},
      {id: 1, name: 'Injy El Mokkaddem', img: './../assets/img_3.png'},
    ],
  },
  {
    id: 9,
    title: 'J',
    data: [
      {id: 0, name: 'Jasmine Raafat', img: './../assets/img_5.png'},
      {id: 1, name: 'Jamila Awad', img: './../assets/img_7.png'},
      {id: 2, name: 'Jomana Murad', img: './../assets/img_9.png'},
    ],
  },
  {
    id: 10,
    title: 'K',
    data: [
      {id: 0, name: 'Karim Abdel Aziz', img: './../assets/img_2.png'},
      {id: 1, name: 'Khaled Abol Naga', img: './../assets/img_4.png'},
      {id: 2, name: 'Kinda Alloush', img: './../assets/img_6.png'},
    ],
  },
  {
    id: 11,
    title: 'L',
    data: [
      {id: 0, name: 'Laila Elwi', img: './../assets/img_8.png'},
      {id: 1, name: 'Lebleba', img: './../assets/img_1.png'},
    ],
  },
  {
    id: 12,
    title: 'M',
    data: [
      {id: 0, name: 'Mohamed Mounir', img: './../assets/img_3.png'},
      {id: 1, name: 'Mona Zaki', img: './../assets/img_5.png'},
      {id: 2, name: 'Mai Ezz El Din', img: './../assets/img_7.png'},
    ],
  },
  {
    id: 13,
    title: 'N',
    data: [
      {id: 0, name: 'Nelly Karim', img: './../assets/img_9.png'},
      {id: 1, name: 'Nour El Sherif', img: './../assets/img_2.png'},
      {id: 2, name: 'Nesma Mahgoub', img: './../assets/img_4.png'},
    ],
  },
  {
    id: 14,
    title: 'O',
    data: [
      {id: 0, name: 'Omar Sharif', img: './../assets/img_6.png'},
      {id: 1, name: 'Ola Ghanem', img: './../assets/img_8.png'},
    ],
  },
  {
    id: 15,
    title: 'P',
    data: [
      {id: 0, name: 'Peter', img: './../assets/img_1.png'},
      {id: 1, name: 'Patricia', img: './../assets/img_3.png'},
      {id: 2, name: 'Paul', img: './../assets/img_5.png'},
    ],
  },
  {
    id: 16,
    title: 'Q',
    data: [
      {id: 0, name: 'Quentin', img: './../assets/img_7.png'},
      {id: 1, name: 'Quinn', img: './../assets/img_9.png'},
    ],
  },
  {
    id: 17,
    title: 'R',
    data: [
      {id: 0, name: 'Rania Youssef', img: './../assets/img_1.png'},
      {id: 1, name: 'Riham Abdel Ghafour', img: './../assets/img_3.png'},
    ],
  },
  {
    id: 18,
    title: 'S',
    data: [
      {id: 0, name: 'Soad Hosny', img: './../assets/img_5.png'},
      {id: 1, name: 'Sherine Abdel Wahab', img: './../assets/img_7.png'},
      {id: 2, name: 'Samira Said', img: './../assets/img_9.png'},
    ],
  },
  {
    id: 19,
    title: 'T',
    data: [
      {id: 0, name: 'Tamer Hosny', img: './../assets/img_2.png'},
      {id: 1, name: 'Tarek Lotfy', img: './../assets/img_4.png'},
      {id: 2, name: 'Tara Emad', img: './../assets/img_6.png'},
    ],
  },
  {
    id: 20,
    title: 'U',
    data: [
      {id: 0, name: 'Ursula kogl', img: './../assets/img_1.png'},
      {id: 1, name: 'Uma Mohamed', img: './../assets/img_3.png'},
      {id: 2, name: 'Uriel', img: './../assets/img_5.png'},
    ],
  },
  {
    id: 21,
    title: 'V',
    data: [
      {id: 0, name: 'Victoria', img: './../assets/img_7.png'},
      {id: 1, name: 'Vincent', img: './../assets/img_9.png'},
      {id: 2, name: 'Vanessa', img: './../assets/img_2.png'},
    ],
  },
  {
    id: 22,
    title: 'W',
    data: [
      {id: 0, name: 'William', img: './../assets/img_4.png'},
      {id: 1, name: 'Willow', img: './../assets/img_6.png'},
      {id: 2, name: 'Wyatt', img: './../assets/img_8.png'},
    ],
  },
  {
    id: 23,
    title: 'X',
    data: [
      {id: 0, name: 'Xavier', img: './../assets/img_1.png'},
      {id: 1, name: 'Xander', img: './../assets/img_3.png'},
    ],
  },
  {
    id: 24,
    title: 'Y',
    data: [
      {id: 0, name: 'Yara', img: './../assets/img_5.png'},
      {id: 1, name: 'Yvonne', img: './../assets/img_7.png'},
    ],
  },
  {
    id: 25,
    title: 'Z',
    data: [
      {id: 0, name: 'Zoe', img: './../assets/img_9.png'},
      {id: 1, name: 'Zachary', img: './../assets/img_2.png'},
    ],
  },
];

const PhoneSectionList = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <PhoneUserComponent
              title={item.name}
              image={imagePaths[item.img] as ImageSourcePropType}
            />
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <PhoneTitleComponent title={title} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});

export default PhoneSectionList;
