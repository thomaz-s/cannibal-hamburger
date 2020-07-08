import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const menu = require('./menu.json');

export function HomeScreen({ navigation }) {

    return (
        <ScrollView style={styles.totalContainer} contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.itemType} onPress={()=>{navigation.navigate('ItemList')}}>
                <Image source={require('./icons_not_free/hamburguer.png')} alt="hamburguer" style={styles.foodIcons}/>
                <Text style={styles.itemName}>Hamburgers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemType}>
                <Image source={require('./icons_not_free/sushi.png')} alt="sushi" style={styles.foodIcons}/>
                <Text style={styles.itemName}>Sushi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemType}>
                <Image source={require('./icons_not_free/drinks.png')} alt="drinks" style={styles.foodIcons}/>
                <Text style={styles.itemName}>Bebidas</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    totalContainer:{
        flex: 1,
        backgroundColor: "#000",
    },

    container:{
        alignItems: "center"
    },

    itemType:{
        height: 128,
        width: "80%",
        borderWidth: 2,
        borderRadius: 3,
        borderColor: "#555",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
        marginVertical: 10
    },

    foodIcons:{
        height: 96,
        width: 96
    },

    itemName:{
        color: "#fff",
        fontSize: 18
    }
});