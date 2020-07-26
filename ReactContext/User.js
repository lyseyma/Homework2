import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import ListContext from './ListContext';

const User = ({index, item}) => {
  return (
    <ListContext.Consumer>
      {({handleSelectUser, selectedUser}) => {
        return (
          <TouchableOpacity onPress={() => handleSelectUser(item)}>
            <Text
              key={index}
              style={StyleSheet.compose(
                styles.user,
                selectedUser === item && styles.active,
              )}>
              {index}. {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    </ListContext.Consumer>
  );
};

export default User;
const styles = StyleSheet.create({
  user: {
    padding: 5,
    margin: 5,
    fontSize: 18,
  },
  active: {
    backgroundColor: '#FF18DC',
  },
});
