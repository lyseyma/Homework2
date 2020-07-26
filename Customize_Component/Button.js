import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const OPACITY = {
  BLUR: 0.5,
  DEFAULT: 1,
};

export default props => {
  const [opacity, setOpacity] = useState(1);

  return (
    <TouchableWithoutFeedback onPress={props.btnLogin}>
      <View
        onTouchStart={() => setOpacity(OPACITY.BLUR)}
        onTouchEnd={() => setOpacity(OPACITY.DEFAULT)}
        style={StyleSheet.flatten([styles.button, props.style, {opacity}])}>
        <Text style={props.textStyle}>{props.children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    backgroundColor: '#3169E2',
    borderRadius: 25,
    marginVertical: 15,
    paddingVertical: 12,
    alignItems: 'center',
  },
});
