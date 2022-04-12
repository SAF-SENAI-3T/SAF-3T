import { Component } from "react";
import React from 'react';
import jwtDecode from 'jwt-decode';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    ImageBackground,
  } from 'react-native';

export default class PreLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.fundo}>
                    <View style={styles.containerEspacamentoLogo}>
                        <Image style={styles.logo} source={require('../../assets/img/Vector.png')}/>
                    </View>

                    <View style={styles.containerEspacamentoTextos}>
                        <Text style={styles.texto}>Bem vindo ao Sistema de Administração de Frotas</Text>
                    </View>
                    
                    <View style={styles.containerEspacamentoSAF}>
                        <Text style={styles.textoGrifado}>SAF</Text>
                    </View>
                    
                    <View style={styles.containerEspacamentoTextos}>
                        <Text style={styles.texto}>Clique no botão abaixo para entrar</Text>
                    </View>
                                       
                    <View style={styles.containerEspacamento}>
                        <TouchableOpacity style={styles.corpoBotao}>
                            <Text style={styles.textoBotao}>COMEÇAR</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center'
    },
    fundo: {
        backgroundColor: '#0E758C',
        height: "100%",
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50
    },
    logo: {
        width: 95.5,
        height: 93
    },
    texto: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Montserrat',
    },
    textoGrifado: {
        fontSize: 20,
        color: 'white',
        fontWeight: '900', 
        fontFamily: 'Montserrat',
    },
    textoBotao: {
        fontWeight: '900',
        fontSize: 25,
        color: 'white',
        fontFamily: 'Montserrat'
    },
    corpoBotao: {
        width: 190,
        height: 60,
        backgroundColor: '#0F282D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 60,
    },
    containerEspacamentoLogo: {
        //backgroundColor: 'pink',
        //flex: 1,
        height: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerEspacamentoSAF: {
        //backgroundColor: 'pink',
        //flex: 1,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerEspacamentoTextos: {
        //backgroundColor: 'pink',
        //flex: 1,
        height: 50,
        width: 250,
        marginTop: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

})