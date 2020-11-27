import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import  PostForum  from '../../Components/postagemForum/postForum';

export default () => {
 return (
   <ScrollView style={styles.container}>
    
     <PostForum />

     <PostForum />

     <PostForum />

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00CD66'
  }
});