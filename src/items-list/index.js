import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import style from './style';
const hamburguers = require('../menu.json');

export function ItemList({navigation}){
    return(
        <View style={style.container}>
            <FlatList
                style={style.list}
                contentContainerStyle={style.listContent}
                data={hamburguers}
                renderItem={
                    ({item}) => {
                        return(
                            <TouchableOpacity style={style.itemContainer} onPress={()=>{navigation.navigate('ItemDetails')}}>
                                <View style={style.nameAndPrice}>
                                    <Text style={style.textNameAndPrice}>{item.name}</Text>
                                    <Text style={style.textNameAndPrice}>{`R$ ${item.price},00`}</Text>
                                </View>
                                <Text style={style.textIngredients}>{item.ingredients}</Text>
                            </TouchableOpacity>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />
        </View>
    );
}