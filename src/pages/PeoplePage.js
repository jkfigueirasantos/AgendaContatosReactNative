import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  ActivityIndicator
} from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [],
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    axios.get(`https://randomuser.me/api/?nat=br&results=15`)
      .then( res => {
        const { results } = res.data;
        this.setState({
          people: results,
          loading: false
        })
      })
      .catch(err => {
        this.setState({
          error: true,
          loading: false
        })
      })
  }

  renderPage() {
    if ( this.state.loading ) {
      return <ActivityIndicator size="large" color="#220" /> 
    }
    if ( this.state.error ) {
      return <Text style={styles.errorWarning}>Ops... Deu ruim!</Text>
    }
    return (
      <PeopleList 
        peoples={ this.state.people } 
        onPressItem={ pageParams => this.props.navigation.navigate('PeopleDetail', pageParams)} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderPage() }
        { /* Solução usando renderização com ternários
          this.state.loading 
            ? <ActivityIndicator size="large" color="#220" /> 
            : this.state.error
              ? <Text style={styles.errorWarning}>Ops... Deu ruim!</Text>
              : <PeopleList 
                  peoples={ this.state.people } 
                  onPressItem={ pageParams => this.props.navigation.navigate('PeopleDetail', pageParams)}
                  />
          */
        }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  errorWarning: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'red',
    color: '#FFF',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  }
})