import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const PeopleDetailLine = ({label = "", content = "-"}) => (
  <View style={styles.detailRow}>
    <Text style={[
      styles.detailCell, 
      styles.labelCell,
      label.length > 9 ? styles.longLabel : null
      ]}>{label}: </Text>
    <Text style={styles.detailCell}>{ content }</Text>
  </View>
)

const styles = StyleSheet.create({
  detailRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
  },
  detailCell: {
    paddingVertical: 8,
    fontSize: 14,
    flex: 4
  },
  labelCell: {
    fontWeight: 'bold',
    flex: 2
  },
  longLabel: {
    fontSize: 11,
  }
})


export default PeopleDetailLine
