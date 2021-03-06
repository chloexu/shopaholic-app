import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Text, View } from './Themed';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export function ShoppingList({ item, onPress, }: any) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[styles.item]}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export function renderItem({ item }: any) {
  return (
    <ShoppingList
      item={item}
      onPress={() => {
        console.log("Printed item", item)
      }}
    />
  );
}

export default function ShoppingLists() {
  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 1,
    width: "100%",
    backgroundColor: "#A8DADC"
  },
  title: {
    fontSize: 20,
    color: "#1D3557"
  },
});
