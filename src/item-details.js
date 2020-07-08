import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export function ItemDetails({navigation, route}){
    return(
        <ScrollView style={styles.totalContainer} contentContainerStyle={styles.container}>
            <View style={styles.itemDescription}>
                <View style={styles.imgAndTitle}>
                    <Image style={styles.img} source={require('./icons_not_free/hamburguer.png')} alt='hamburguer name'/>
                    <Text style={styles.name}>
                        Canibal
                    </Text>
                </View>
                <Text style={styles.ingredients}>
                    Pão especial, carne artesanal, queijo empanado, repolho fresco e cheddar cremoso
                </Text>
                <Text style={styles.price}>
                    R$ 10,00
                </Text>
            </View>
            <View style={styles.makeOrder}>
                <TouchableOpacity style={styles.button}><Text style={styles.plusText}>+</Text></TouchableOpacity>
                <View style={styles.qtd}>
                    <Text style={styles.qtdText}>0</Text>
                </View>
                <TouchableOpacity style={styles.button}><Text style={styles.minusText}>-</Text></TouchableOpacity>
                <Text style={styles.itemsTotal}>Valor Total: R$ 15,00</Text>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    totalContainer:{
        flex: 1,
        backgroundColor: '#000',
    },

    container:{
        backgroundColor: '#000',
        padding: 10
    },

    itemDescription:{
        borderWidth: 2,
        borderRadius: 3,
        padding: 5,
        borderColor: '#555'
    },

    imgAndTitle:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20
    },

    img: {
        width: 72,
        height: 72
    },

    name:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 30
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

    makeOrder:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    button:{
        height: 36,
        width: 36,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 1,
        borderColor: '#555',
        alignItems: 'center',
        justifyContent: 'center'
    },

    qtd:{
        height: 36,
        width: 36,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 1,
        borderColor: '#555',
        alignItems: 'center',
        justifyContent: 'center'
    },

    qtdText:{
        color: '#000',
    },

    plusText:{
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#00f'
    },

    minusText:{
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#f00'
    },

    itemsTotal:{
        color: '#fff',
        alignSelf: 'center'
    },

    addButton:{
        backgroundColor: '#fff',
        padding: 5,
        borderWidth: 2,
        borderRadius: 1,
        borderColor: '#555',
    },

    addText:{
        fontSize: 14,
        color: '#29850b'
    }
});