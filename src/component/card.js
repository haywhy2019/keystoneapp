import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Card = ({ title, price, url }) => {

  return (
    <View style={styles.container}>
      <Image
        source={{uri: url}}
        style={styles.image}
      />
      <View style={styles.container2}>
        <Text style={styles.title}>{title}</Text>
        <Text> &euro; {price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    margin: 5,
    alignItems: "flex-start",
    borderRadius: 10,
    height: 270,
    elevation: 5,
    overflow: "hidden",
  },
  image: {
    width: 200,
    height: 170,
  },
  container2: {
   paddingHorizontal: 25
  },
  title: {
    fontWeight: "bold",
    marginTop: 10,
    height: 55
  },
});

export default Card;
