import React, {useState} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import MyTextInput from './TextInput';
import Button from './Button';
import styles from './styles';

export default function App() {
  // const showme = () => alert('you have click show me');
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    alert([username, password].join('\n'));
  };
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={{
            uri:
              'https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png',
          }}
        />
        {/* <Text style={styles.TxtSyle}>Login</Text> */}
        <MyTextInput
          style={styles.input}
          placeholder="User Name"
          onChangeText={setUsername}
          validate={true}
        />
        <MyTextInput
          style={styles.input}
          placeholder="Password"
          type="password"
          onChangeText={setPassword}
          secureTextEntry={true}
          validate={true}
        />
        <Button textStyle={{color: 'white'}} btnLogin={login}>
          Login
        </Button>
        <Text style={styles.signupTxt}>Don't have an account yet?</Text>
        <Text style={{color: 'blue'}}>Signup</Text>
      </View>
    </ImageBackground>
  );
}
const image = {
  uri: 'https://r-cf.bstatic.com/images/hotel/max1024x768/116/116281457.jpg',
};
