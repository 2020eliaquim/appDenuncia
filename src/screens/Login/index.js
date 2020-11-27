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
    //suporte@b7web.com.br
    //1234
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();
    
    const [emailFiel, setEmailField] = useState('');
    const [passwordField, setPassWordField] = useState('');

    const entrarClick = async () => {
        if(emailFiel != '' && passwordField != '') {
            
            let resjson = await Api.Login(emailFiel, passwordField);

            if (resjson.token) {
                
                await AsyncStorage.setItem('token', resjson.token);

                userDispatch({
                    
                    type: 'setAvatar',
                    
                    payload: {
                        
                        avatar: resjson.data.avatar

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
            routes: [{name: 'Cadastrar'}]
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
                placeholder='Digite seu Email'
                value={emailFiel}
                onChangeText={t=>setEmailField(t)}
            />

            <TextInput
                style={styles.inputLogin}
                placeholder='Digite sua Senha'
                value={passwordField}
                onChangeText={t=>setPassWordField(t)}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.btnEntrar}
                onPress={entrarClick}
            >
                <Text style={styles.btnText}>ENTRAR</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.btnNaoCadastrado}
                onPress={clickCadastrar}
            >   
                
                <Text style={styles.btnTextNaoCadastrado}>Não é cadastrado?</Text> 

                <Text style={styles.btnTextNaoCadastradoBold}> Cadastrar</Text>

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
        width: 250,
        height: 250,
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