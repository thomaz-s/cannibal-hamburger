import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
const hamburguers = require('./menu.json');

export function ItemList({navigation}){
    return(
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                contentContainerStyle={styles.listContent}
                data={hamburguers}
                renderItem={
                    ({item}) => {
                        return(
                            <TouchableOpacity style={styles.itemContainer} onPress={()=>{navigation.goBack()}}>
                                <View style={styles.nameAndPrice}>
                                    <Text style={styles.textNameAndPrice}>{item.name}</Text>
                                    <Text style={styles.textNameAndPrice}>{`R$ ${item.price},00`}</Text>
                                </View>
                                <Text style={styles.textIngredients}>{item.ingredients}</Text>
                            </TouchableOpacity>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    list:{
        backgroundColor: "#000",
    },

    listContent:{
        padding: 10
    },

    itemContainer:{
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "#555",
        padding: 10,
        marginBottom: 10
    },

    nameAndPrice:{
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textNameAndPrice:{
        color: "#fff"
    },

    textIngredients:{
        color: "#555"
    }
});