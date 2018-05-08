import { StackNavigator } from 'react-navigation'
import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailPage from './src/pages/PeopleDetailPage'
import { capitalizeFirstLetter } from './src/utilities'

export default StackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ( {navigation} ) => {
      const personFirstName = capitalizeFirstLetter( navigation.state.params.person.name.first )
      /* 
       * "navigation.state" traz todas as informações do roteamento, igual ao react router, 
       * com push, replace e outras informações da navegação fornecida pelo react navigation.
       * 
       * "params" é onde podemos acessar as infos pertinentes ao objeto passado pelo navigatePeopleDetail, 
       * no componente PeopleListItem, com o "person" sendo o valor do objeto recebido pelo props no map do
       * PeopleList, sendo o "name" e "first" valores do mesmo, fornecido pela API.
       * 
       */
      return (
        {
          title: personFirstName,
          headerTitleStyle: {
            fontSize: 20
          }
        }
      )
    }
  }
}, {
  navigationOptions: {
    title: 'Contatos',
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#4286f4',
      paddingHorizontal: 16,
    },
    headerTitleStyle: {
      color: '#FFF',
      fontSize: 20
    }
  }
})