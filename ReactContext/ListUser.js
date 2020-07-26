import React from 'react';
import {
  Text,
  View,
  // Image,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  // ScrollView,
  // FlatList,
} from 'react-native';
// import User from './User';
import List from './List';
import ListUserContext from './ListContext';

export default class ListUser extends React.Component {
  state = {
    userList: ['Nita', 'Seyma', 'Kong', 'channa', 'Darith'],
    selectedUser: '',
  };

  addUser = () => {
    // alert(this.state.newUser);
    const {userList, newUser} = this.state;
    if (!newUser) {
      return alert('Please input new User');
    }

    this.setState({
      userList: [...userList, newUser],
      newUser: '',
    });
  };

  handleSelectUser = user => {
    this.setState({
      selectedUser: user,
    });
  };

  handleNewUser = user => {
    this.setState({
      newUser: user,
    });
  };

  render() {
    return (
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.backgroun}>
          <TextInput
            style={styles.input}
            placeholder="UserName"
            onChangeText={this.handleNewUser}
            value={this.state.newUser}
          />
          <TouchableOpacity style={styles.button} onPress={this.addUser}>
            <Text style={styles.buttonTxt}>Submit</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 25, color: 'red'}}>List User</Text>
          <ListUserContext.Provider
            value={{
              showList: this.state.userList,
              selectedUser: this.state.selectedUser,
              handleSelectUser: this.handleSelectUser,
            }}>
            <List />
          </ListUserContext.Provider>
        </View>
      </ImageBackground>
    );
  }
}
const image = {
  uri: 'https://r-cf.bstatic.com/images/hotel/max1024x768/116/116281457.jpg',
};
const styles = StyleSheet.create({
  input: {
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
    width: 300,
    fontSize: 18,
    borderRadius: 25,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    backgroundColor: '#3169E2',
    borderRadius: 25,
    marginVertical: 15,
    paddingVertical: 12,
    alignItems: 'center',
  },
  backgroun: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00FFFF',
    opacity: 0.7,
  },
  user: {
    padding: 5,
    backgroundColor: '#eee',
    // textAlign: 'center',
    margin: 5,
    // textAlign: 'left',
    fontSize: 18,
  },
});
