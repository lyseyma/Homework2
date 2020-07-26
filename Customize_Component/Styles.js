import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00FFFF',
    opacity: 0.7,
},
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
  signupTxt: {
    marginTop: 45,
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 10,
}
});

export default styles;
