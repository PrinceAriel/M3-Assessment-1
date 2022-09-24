import { Text, View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import serviceData from './Data';


const windowWidth = Dimensions.get('window').width;
const windowHight = Dimensions.get('window').height;
const cardHeight = windowHight * 0.2;
const cardWidth = windowWidth * 0.2;


const Home = ({ navigation }) => {
    return (

        <SafeAreaView>
            <FlatList
                data={serviceData}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('Detail')}} style={{ margin: 20, height: windowHight * 0.2, backgroundColor:item.bgColor, borderRadius: 12 }}>
                           
                        <View style={{backgroundColor:item.bgColor}}>
                                <Text style={styles.category}>
                                    {item.category}
                                </Text>
                                <Text>
                                    {item.name}
                                </Text>
                                <Text>
                                    {item.numberCompany}
                                </Text>

                            

                        </View>
                        </TouchableOpacity>

                    )
                }}
            >

            </FlatList>
        </SafeAreaView>
    );
};

//define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ECF0F1',
    },

    category: {
        fontSize: 24,
        fontWeight: '200'
    },
    name: {
        fontSize: 18,
    }




});

//make this component available to the app
export default Home;