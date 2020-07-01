import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

export function ItemDetails({navigation, route}){
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('./icons_not_free/hamburguer.png')} alt='hamburguer name'/>
            <View style={styles.itemDescription}>
                <Text style={styles.name}>
                    Canibal
                </Text>
                <Text style={styles.ingredients}>
                    Lorem Ipsum
                </Text>
                <Text style={styles.price}>
                    R$ 10,00
                </Text>
            </View>
            <View style={styles.qtd}>
                <TouchableOpacity style={styles.plus}><Text>+</Text></TouchableOpacity>
                <TextInput style={styles.input} value={'0'} />
                <TouchableOpacity style={styles.minus}><Text>-</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'row'
    },

    img: {
        width: 72,
        height: 72
    },

    itemDescription:{
        borderWidth: 1,
        padding: 10,
        borderColor: '#555',
        alignItems: 'flex-start'
    },

    name:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    ingredients:{
        color: '#555',
        fontSize: 16
    },

    price:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },

    qtd:{

    },

    plus:{

    },

    input:{

    },

    minus:{

    }
});