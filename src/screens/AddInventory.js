import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import Input from "../component/input";
import { Ionicons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";
import uuid from "react-native-uuid";
import { products } from "../data/data";

const data = [
  { label: "Jewery", value: "Jewery" },
  { label: "Clothes", value: "Cloths" },
  { label: "Cars", value: "Cars" },
];

const AddInventory = ({ showModal, display, navigation }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [err, setErr] = useState("");

  const navigate = () => {
    navigation.navigate("Inventory");
    display();
  };

  const prices = products.map((x) => x.purchasePrice);
  const totalPrice = prices.reduce((prev, current) => prev + current);
  const submitHandler = () => {
    if (value == "" || name == "" || price == "" || desc == "" || image == "") {
      setErr("All fields must be filled");
      return;
    }
    if (totalPrice >= 40000) {
      console.log("price should be less than 5000", totalPrice, prices);
      setErr("price should be less than 5000");
      return;
    }

    setErr("");
    const newId = uuid.v4();
    const payload = {
      id: newId,
      name,
      purchasePrice: parseInt(price),
      type: value,
      description: desc,
      photo: image,
    };
    products.push(payload);
    setImage("");
    navigate();
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Select Item
        </Text>
      );
    }
    return null;
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <View style={styles.mainContainer}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={showModal}
          onRequestClose={() => display()}
          propagateSwipe={true}
        >
          <ScrollView>
            <View style={styles.container1}>
              <Text onPress={display}>Cancel</Text>

              <Text style={styles.addButton} onPress={submitHandler}>
                Add
              </Text>
            </View>
            {image ? (
              <View style={styles.center}>
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200, borderRadius: 100 }}
                />
              </View>
            ) : (
              <View style={styles.center}>
                <Ionicons
                  name="camera"
                  size={60}
                  color="blue"
                  onPress={pickImage}
                />
                <Text style={styles.cameraText}>Add Photo</Text>
              </View>
            )}

            <Input
              label="Name"
              placeholder="Bracelet"
              style={styles.dropdown}
              onChangeText={(text) => setName(text)}
            />

            <View style={styles.container}>
              {renderLabel()}
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                // search
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select item" : "..."}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
            <Input
              label="Value"
              placeholder="500"
              style={styles.dropdown}
              onChangeText={(text) => setPrice(text)}
              keyboardType="numeric"
            />
            <Input
              label="Description"
              placeholder="Optional"
              multiline={true}
              numberOfLines={10}
              style="text"
              style={styles.multiline}
              onChangeText={(text) => setDesc(text)}
            />
            <Text style={styles.container1}> {err}</Text>
          </ScrollView>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    fontWeight: "bold",
    color: "blue",
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
  },
  mainContainer: {
    padding: 25,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  center: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  cameraText: {
    fontWeight: "bold",
  },
  multiline: {
    textAlignVertical: "top",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default AddInventory;
