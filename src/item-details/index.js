import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import style from './style';

export function ItemDetails({navigation, route}){
    return(
        <ScrollView style={style.totalContainer} contentContainerStyle={style.container}>
            <View style={style.itemDescription}>
                <View style={style.imgAndTitle}>
                    <Image style={style.img} source={require('../icons_not_free/hamburguer.png')} alt='hamburguer name'/>
                    <Text style={style.name}>
                        Canibal
                    </Text>
                </View>
                <Text style={style.ingredients}>
                    Pão especial, carne artesanal, queijo empanado, repolho fresco e cheddar cremoso
                </Text>
                <Text style={style.price}>
                    R$ 10,00
                </Text>
            </View>
            <View style={style.makeOrder}>
                <TouchableOpacity style={style.button}><Text style={style.plusText}>+</Text></TouchableOpacity>
                <View style={style.qtd}>
                    <Text style={style.qtdText}>0</Text>
                </View>
                <TouchableOpacity style={style.button}><Text style={style.minusText}>-</Text></TouchableOpacity>
                <Text style={style.itemsTotal}>Valor Total: R$ 15,00</Text>
                <TouchableOpacity style={style.addButton}>
                    <Text style={style.addText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}