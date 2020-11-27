import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Feed() {
 return (
   <View style={styles.container}>
     <Text>Meus</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40E0D0',
    justifyContent: 'center',
    alignItems: 'center'
  }
});