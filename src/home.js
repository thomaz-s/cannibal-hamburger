import React from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import styles from './styles';
const menu = require('./menu.json');

export function HomeScreen({ navigation }) {

    return (
        <View style={styles.totalContainer}>
            <FlatList contentContainerStyle={styles.list}
            data={menu}
            keyExtractor={item=>item._id}
            renderItem={renderItem}/>

            <View style={styles.footer}>
                <Text style={styles.headerText} onPress={()=>{navigation.navigate('Details')}}>Finalizar Pedido</Text>
            </View>
        </View>
    );

    function renderItem ({item}) {
        return (
            <View style={styles.productContainer}>
                
                <View style={styles.productDescripion}>
                    <Text style={styles.productTitle}>{item.name}</Text>
                    <Text style={styles.productIngredients}>{item.ingredients}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                </View>
                
                <View style={styles.qtdContainer}>
                    <TouchableOpacity style={styles.qtdButton} onPress={()=>{updateCart(item._id)}}>
                        <Text style={styles.plusSignal}>+</Text>
                    </TouchableOpacity>
                    <View style={styles.qtdBox}>
                        <Text style={styles.textQtd}>{item.qtd}</Text>
                    </View>
                    <TouchableOpacity style={styles.qtdButton} onPress={()=>{updateCart(item._id)}}>
                        <Text style={styles.minusSignal}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}