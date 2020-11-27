import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AvatarUser from '../AvatarUser/AvatarUser';
import HeaderTitle from './headerTitle';
import { useNavigation } from '@react-navigation/native';

export default () => {

    const navigation = useNavigation();

    const clickLerMais = () => {
        navigation.navigate('Login')
    }
 
    return(
        <View style={styles.container}>

            <AvatarUser />
            
            <HeaderTitle />

            <Text style={styles.denunciaTxt}>
                Nos últimos anos, as queimadas no Pantanal vêm aumentando significativamente por diversos motivos, dos quais os mais comum são as causas humanas, sejam acidentais, sejam criminosas. Pelo menos três fatores provocam o avanço dessas práticas, são eles: o aumento das atividades agrícolas e pecuaristas; a ação humana ou antrópica; o clima tropical aliado ao tempo seco.
            </Text>

            <TouchableOpacity
                onPress={clickLerMais}
            >
                <Text style={styles.lerMais}>Ler Mais</Text>
            </TouchableOpacity>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        paddingBottom: 10,
        borderRadius: 5,
        elevation: 5
    },
    userTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 60,
        paddingTop: 15,
        paddingBottom: 10,
    },
    denunciaTxt: {
        fontSize: 13,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'justify'
    },
    lerMais: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'right',
        paddingRight: 15
    }
});