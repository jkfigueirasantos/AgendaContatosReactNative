import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { capitalizeFirstLetter } from '../utilities';

const PeopleListItem = props => {

  const {person, navigatePeopleDetail} = props;
  const { title, first, last } = person.name;

  return (
    <TouchableOpacity onPress={ 
        () => {
          console.log('Selecionou:', first)
          navigatePeopleDetail({ person })
        }
        }>
      <View style={styles.personWrapper}>
        <Image style={styles.avatar} source={{uri: person.picture.medium}} />
        <Text style={styles.personName}>
          <Text style={styles.personTitle}>
            {capitalizeFirstLetter(title)}
          </Text>
          { ` ${
              capitalizeFirstLetter(first)
            } ${
              capitalizeFirstLetter(last)
            }` }
        </Text>
      </View>
    </TouchableOpacity>
  )
};

export default PeopleListItem;

const styles = StyleSheet.create({
  personWrapper : {
    backgroundColor: '#FFF',
    padding: 16,
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  personName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 5
  },
  personTitle: {
    color: '#888',
    fontWeight: 'bold',
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 16,
    flex: 1
  }
})