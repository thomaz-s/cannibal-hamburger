import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
const menu = require('./menu.json');

export function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.itemType}>
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
        </View>
    );
}