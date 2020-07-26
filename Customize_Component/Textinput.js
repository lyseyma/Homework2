import React, {useState} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

const validation = {
  password: {
    validate: val => {
      return val.length >= 6;
    },
    message: 'Password must be at least 6 characters.',
  },
  text: {
    validate: val => {
      return /[A-Za-z]/.test(val);
    },
    message: 'Please enter a valid character',
  },
};

const MyTextInput = props => {
  const [hasError, setHasError] = useState(false);
  const validator = validation[props.type] || validation.text;
  const validate = val => {
    return validator.validate(val);
  };

  return (
    <>
      <TextInput
        {...props}
        // placeholder="Input Username"
        onChangeText={txt => {
          txt ? setHasError(!validate(txt)) : setHasError(false);
          props.onChangeText(txt);
        }}
      />
      {props.validate && hasError && (
        <Text style={styles.error}>{validator.message}</Text>
      )}
    </>
  );
};
MyTextInput.defaultProps = {
  onChangeText: () => {},
};
export default MyTextInput;

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});
