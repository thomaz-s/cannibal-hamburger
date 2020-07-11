import React, { useState } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import style from './style';
const menu = require('../menu.json');
const types = require('../types.json');

export function HomeScreen({ navigation }) {

    return (
        // <FlatList
        //     style={style.totalContainer}
        //     contentContainerStyle={style.container}
        //     data={types}
        //     renderItem={
        //         ({item})=>{
        //             return(
        //                 <TouchableOpacity style={style.itemType} onPress={()=>{navigation.navigate('ItemList')}}>
        //                     <Image source={require(item.img)} alt={item.type} style={style.foodIcons}/>
        //                     <Text style={style.itemName}>{item.type}</Text>
        //                 </TouchableOpacity>
        //             );
        //         }
        //     }
        //     keyExtractor={item => item.id}
        // />
        <ScrollView style={style.totalContainer} contentContainerStyle={style.container}>
            <TouchableOpacity style={style.itemType} onPress={()=>{navigation.navigate('ItemList', {type:'0'})}}>
                <Image source={require('../icons/not_free/hamburguer.png')} alt="hamburguer" style={style.foodIcons}/>
                <Text style={style.itemName}>Hamburgers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.itemType} onPress={()=>{navigation.navigate('ItemList', {type:'1'})}}>
                <Image source={require('../icons/not_free/sushi.png')} alt="sushi" style={style.foodIcons}/>
                <Text style={style.itemName}>Sushi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.itemType} onPress={()=>{navigation.navigate('ItemList', {type:'2'})}}>
                <Image source={require('../icons/not_free/drinks.png')} alt="drinks" style={style.foodIcons}/>
                <Text style={style.itemName}>Bebidas</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}