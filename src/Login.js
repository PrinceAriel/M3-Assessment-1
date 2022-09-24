import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { Component } from 'react';


const windowWidth = Dimensions.get('window').width;
const windowHight = Dimensions.get('window').height;


const Login = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontWeight: '100',fontSize: 34, marginBottom: 10}}>Welcome Back</Text>
            <Text style={{ marginBottom: 10, fontSize: 18}}>
                Sign in to continue
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                />
                <TextInput
                    style={styles.input}

                    placeholder="Password" />

            </View>


            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate('Home')}} >

                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 140,
        

    },

    input: {
        height: 40,
        margin: 12,
        //borderWidth: 1,
        borderBottomWidth: 1,
        padding: 10,
       
    },
    button: {
        backgroundColor: "#633974",
        padding: 15,
        margin: 25,
        width: '30%',
        borderRadius: 6,
        marginTop: 0.1,
       
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },

    form: {
        margin: 16,
        paddingTop: windowHight/10,
         
    }

});


export default Login

