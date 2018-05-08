import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import PeopleDetailLine from '../components/PeopleDetailLine'
import { capitalizeFirstLetter } from '../utilities'

const PeopleDetailPage = (props) => {
  const { person } = props.navigation.state.params
  return (
    <View style={styles.container}>

      <Image 
        style={styles.avatar}
        source={{ uri: person.picture.large }} />

      <View style={styles.detailContainer}>
        <PeopleDetailLine label="Email" content={person.email} />
        <PeopleDetailLine label="Cidade" content={capitalizeFirstLetter(person.location.city)} />
        <PeopleDetailLine label="Estado" content={capitalizeFirstLetter(person.location.state)} />
        <PeopleDetailLine label="Tel" content={person.phone} />
        <PeopleDetailLine label="Cel" content={person.cell} />
        <PeopleDetailLine label="Nacionalidade" content={person.nat} />
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  avatar: {
    aspectRatio: 1
  },
  detailContainer: {
    backgroundColor: '#FFF',
    elevation: 1
  },
})

export default PeopleDetailPage
