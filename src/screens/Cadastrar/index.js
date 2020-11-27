import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../../Context/UserContext';
import {
    ImageBackground,
    StyleSheet, Image,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';

export default () => {
    
    const navigation = useNavigation();
    const { dispatch: userDispatch } = useContext(UserContext);

    const [nameField, setNameField] = useState('');
    const [emailFiel, setEmailField] = useState('');
    const [passwordField, setPassWordField] = useState('');
    const [passwordConfirmField, setPassWordConfirmField] = useState('');

    const entrarClick = async () => {
        if(emailFiel != '' && passwordField != '' && passwordConfirmField != '') {
            
            let res = await Api.Cadastrar(nameField, emailFiel, passwordField);

            if (res.token) {
                
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
                alert("Email ou Senha estão incorretos!")
            }

        } else {

            alert("Preencha todos os campos!");

        }
    }

    const clickCadastrar = () => {
        navigation.reset({
            routes: [{name: 'Login'}]
        });
    }

    return(
        <ImageBackground
        source={require('../../assets/backgroundLogin.jpg')}
        style={styles.image}
        >

            <Image 
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />

            <TextInput
                style={styles.inputLogin}
                placeholder='Digite seu Nome Completo'
                value={nameField}
                onChangeText={t=>setNameField(t)}
            />

            <TextInput
                style={styles.inputLogin}
                placeholder='Digite seu Email'
                value={emailFiel}
                onChangeText={t=>setEmailField(t)}
            />

            <TextInput
                style={styles.inputLogin}
                placeholder='Digite uma Senha'
                value={passwordField}
                onChangeText={t=>setPassWordField(t)}
                secureTextEntry={true}
            />

            <TextInput
                style={styles.inputLogin}
                placeholder='Confirmar Senha'
                value={passwordConfirmField}
                onChangeText={t=>setPassWordConfirmField(t)}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.btnEntrar}
                onPress={entrarClick}
            >
                <Text style={styles.btnText}>CADASTRAR</Text>
            </TouchableOpacity>
            
            
            
            <TouchableOpacity 
                style={styles.btnNaoCadastrado}
                onPress={clickCadastrar}
            >   
                
                <Text style={styles.btnTextNaoCadastrado}>É cadastrado?</Text> 

                <Text style={styles.btnTextNaoCadastradoBold}> Login</Text>

            </TouchableOpacity>

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
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
    inputLogin: {
        backgroundColor: '#fff',
        width: '80%',
        height: 40,
        borderRadius: 5,
        marginBottom: 20,
        alignSelf: 'center',
        paddingLeft: 10
    },
    btnEntrar: {
        backgroundColor: '#088A08',
        width: '80%',
        height: 40,
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    },
    btnNaoCadastrado: {
        flexDirection: 'row',
        marginTop: 10,
        alignSelf: 'center'
    },
    btnTextNaoCadastrado: {
        fontSize: 12,
        color: '#fff'
    },
    btnTextNaoCadastradoBold: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff'
    }
});