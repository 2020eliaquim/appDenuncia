import React, { useEffect, useContext } from 'react';
import { ImageBackground, StyleSheet, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native'
import Api from '../../Api';
import { UserContext } from '../../Context/UserContext';

export default () => {

    const navigation = useNavigation();
    const { dispatch: userDispatch } = useContext(UserContext);

    useEffect(()=>{

        const checkToken = async () => {

            const token = await AsyncStorage.getItem('token');

            if(token !== null) {
                
                let res = await Api.checkToken(token);

                if(res.token) {
                    
                    await AsyncStorage.setItem('token', res.token);

                    userDispatch({
                        type: 'setAvatar',
                        payload: {
                            avatar: res.data.avatar
                        }
                    });

                    navigation.reset({
                        routes: [{name: 'Dashboard'}]
                    });

                } else {
                    navigation.navigate('Login');
                }
                
            } else {
                navigation.navigate('Login');
            }
        }

        checkToken();

    }, []);

    return(
        <ImageBackground
        source={require('../../assets/backgroundLogin.jpg')}
        style={styles.image}
        >

            <Image 
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />

        <ActivityIndicator size="large" color="#00ff00" />

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    logo: {
        width: 250,
        height: 250,
        alignSelf: 'center'
    }
});