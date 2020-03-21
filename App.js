import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

const App: () => React$Node = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando</Text>
        <Text style={styles.postDescription}>
          Ips Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam,
          non rem illum quibusdam id amet facilis, ea, in quaerat labore dolorem
          porro repellat eveniet eligendi sequi cum maxime impedit?
        </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando 2</Text>
        <Text style={styles.postDescription}>
          Ips Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam,
          non rem illum quibusdam id amet facilis, ea, in quaerat labore dolorem
          porro repellat eveniet eligendi sequi cum maxime impedit?
        </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando 3</Text>
        <Text style={styles.postDescription}>
          Ips Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam,
          non rem illum quibusdam id amet facilis, ea, in quaerat labore dolorem
          porro repellat eveniet eligendi sequi cum maxime impedit?
        </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando</Text>
        <Text style={styles.postDescription}>
          Ips Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam,
          non rem illum quibusdam id amet facilis, ea, in quaerat labore dolorem
          porro repellat eveniet eligendi sequi cum maxime impedit?
        </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando 2</Text>
        <Text style={styles.postDescription}>
          Ips Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam,
          non rem illum quibusdam id amet facilis, ea, in quaerat labore dolorem
          porro repellat eveniet eligendi sequi cum maxime impedit?
        </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando</Text>
        <Text style={styles.postDescription}>
          Ips Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam,
          non rem illum quibusdam id amet facilis, ea, in quaerat labore dolorem
          porro repellat eveniet eligendi sequi cum maxime impedit?
        </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando 2</Text>
        <Text style={styles.postDescription}>
          Ips Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam,
          non rem illum quibusdam id amet facilis, ea, in quaerat labore dolorem
          porro repellat eveniet eligendi sequi cum maxime impedit?
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*     justifyContent: 'center',
    alignItems: 'center',
 */ backgroundColor:
      '#333',
  },
  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 3,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postDescription: {
    color: '#888',
  },
});

export default App;
