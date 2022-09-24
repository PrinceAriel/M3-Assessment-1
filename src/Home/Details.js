//import libraries
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';



//create a component
const Details = () => {

    const [currentLocation, setCurrentLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setCurrentLocation(currentLocation);


        })();
    }, []);

    


    return (
        <View style={styles.container}>
            <MapView style={styles.map}

                initialRegion={{
                    latitude: -24.599300,
                    longitude: 31.048929,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}

            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fafafa",
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

});

export default Details;