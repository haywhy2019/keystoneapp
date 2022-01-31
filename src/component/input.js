import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Input = (props) => {

  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 8
  },
  label: {
    fontWeight: "bold",
    marginHorizontal: 20,
  },
});

export default Input;
