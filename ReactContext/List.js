import React from 'react';
import {FlatList} from 'react-native';
import User from './User';
import ListUserContext from './ListContext';

export default class List extends React.Component {
  render() {
    return (
      <ListUserContext.Consumer>
        {context => {
          return (
            <FlatList
              data={context.showList}
              renderItem={props => <User {...props} />}
            />
          );
        }}
      </ListUserContext.Consumer>
    );
  }
}
