import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import style from './style';
const menu = require('../menu.json');

export function HomeScreen({ navigation }) {

    return (
        <ScrollView style={style.totalContainer} contentContainerStyle={style.container}>
            <TouchableOpacity style={style.itemType} onPress={()=>{navigation.navigate('ItemList')}}>
                <Image source={require('../icons/not_free/hamburguer.png')} alt="hamburguer" style={style.foodIcons}/>
                <Text style={style.itemName}>Hamburgers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.itemType}>
                <Image source={require('../icons/not_free/sushi.png')} alt="sushi" style={style.foodIcons}/>
                <Text style={style.itemName}>Sushi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.itemType}>
                <Image source={require('../icons/not_free/drinks.png')} alt="drinks" style={style.foodIcons}/>
                <Text style={style.itemName}>Bebidas</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}