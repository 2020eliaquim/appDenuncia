import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default () => {
    return(
        <View style={styles.container}>

            <Image
                source={require('../../assets/userLogado.png')}
                style={styles.avatarLogo}
            />

            <Text style={styles.nomeAvatar}>
                Bia Caldas
            </Text>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flexDirection: 'row'
    },
    avatarLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: 10,
        marginLeft: 10
    },
    nomeAvatar: {
        fontWeight: 'bold',
        marginTop: 25,
        marginLeft: 10
    }
});