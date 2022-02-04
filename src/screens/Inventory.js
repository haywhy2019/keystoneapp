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

function Inventory({navigation}) {
  
  const [modalVisible, setModalVisible] = useState(false);
  const displayModal = () => setModalVisible(!modalVisible);
  const [data, setData] = useState([]);
  const product = products
  
  useEffect(() => {
    setData(product);
  },[product])


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

  return (
    <View style={{ paddingTop: 20, flex: 1}}>
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

      />
<View style={{width:0, height:0 }}>
  <AddInventory showModal={modalVisible} display={displayModal} navigation={navigation}/>
  </View>

    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    maxWidth: '50%',
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
