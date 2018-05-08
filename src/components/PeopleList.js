import React from 'react';
import { View, Text, FlatList } from 'react-native';

import PeopleListItem from './PeopleListItem'

const PeopleList = (props) => {
  
  const { peoples, onPressItem } = props

  return (
    <FlatList
      data={ peoples }
      renderItem={ ({ item }) => (
        <PeopleListItem 
          person={item}
          navigatePeopleDetail={onPressItem} />
      )}
      keyExtractor={ item => item.name.first }
     />
  )

};

export default PeopleList;
