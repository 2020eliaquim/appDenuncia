import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () => {
    return(
        <View style={styles.container}>
            <Text>Usuario</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        margin: 10,
        paddingBottom: 200,
        borderRadius: 5
    }
});