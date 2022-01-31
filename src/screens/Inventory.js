import react, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { products } from "../data/data";
import Card from "../component/card";
import { Ionicons } from "@expo/vector-icons";
import AddInventory from "./AddInventory";

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Card
        title={itemData.item.name}
        price={itemData.item.purchasePrice}
        url={itemData.item.photo}
      />
    </View>
  );
};
function Inventory() {
  const [modalVisible, setModalVisible] = useState(false);
  const displayModal = () => setModalVisible(!modalVisible);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(products);
  }, [products]);

  return (
    <View style={{ paddingTop: 20 }}>
      <View style={styles.container}>
        <Text style={styles.actionTitle}>Inventory</Text>
        <TouchableOpacity onPress={() => displayModal()}>
          <Ionicons name="add" size={18} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderGridItem}
        style={{ height: "100%" }}
      />

      <AddInventory showModal={modalVisible} display={displayModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    padding: 5,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
  },
  actionTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  icon: {
    backgroundColor: "blue",
    borderRadius: 10,
  },
});

export default Inventory;
