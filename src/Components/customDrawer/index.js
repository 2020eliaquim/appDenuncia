import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';

export default ({...props}) => (
    <DrawerContentScrollView {...props} style={styles.container}>
        
        <TouchableOpacity>
            <Image
                source={require('../../assets/userLogado.png')}
                style={styles.logoUser}
            />
        </TouchableOpacity>
        
        <TouchableOpacity>

            <Text style={styles.nomeUser}>Laura Menezes</Text>

        </TouchableOpacity>

        <TouchableOpacity>

            <Text style={styles.emailUser}>laura_menezes123@hotmail.com</Text> 

        </TouchableOpacity>
        
        
        <DrawerItemList {...props} />

        <TouchableOpacity
            style={styles.btnSair}
        >
            <Text style={styles.btnTxtSair}>Sair da Conta</Text>
        </TouchableOpacity>

    </DrawerContentScrollView>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    logoUser: {
        width: 180,
        height: 180,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 100
    },
    nomeUser: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    emailUser: {
        fontSize: 12,
        textAlign: 'center'
    },
    btnSair: {
        flex: 1,
        backgroundColor: '#ff5959',
        width: 100,
        height: 35,
        borderRadius: 3,
        elevation: 3,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '75%'
    },
    btnTxtSair: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    }
});