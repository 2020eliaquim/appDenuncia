import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default () => {
    return(
        <View style={styles.container}>
            
            <TouchableOpacity>
                <Text style={styles.textContainer}>FOCOS DE QUEIMADAS NA ALVORADA</Text>
            </TouchableOpacity>
              
           <Text style={styles.textDate}>11/11/2020 postado ás 15:2hrs</Text>           
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginBottom: 5
    },
    textContainer: {
        fontWeight: 'bold'
    },
    textDate: {
        fontSize: 12,
        color: '#8B8989'
    }
});