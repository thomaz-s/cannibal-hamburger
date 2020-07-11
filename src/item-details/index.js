import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import style from './style';

export function ItemDetails({route}){
    const item = route.params.item;
    
    const [qtd, setQtd] = useState(0);
    const [itemsValue, setItemsValue] = useState(0);
    
    function increaseQtd(){
        setItemsValue((qtd+1)*item.price);
        setQtd(qtd+1);
    }

    function decreaseQtd(){
        if (qtd<1) return;

        setItemsValue((qtd-1)*item.price);
        setQtd(qtd-1);
    }

    return(
        <ScrollView style={style.totalContainer} contentContainerStyle={style.container}>
            <View style={style.itemDescription}>
                <View style={style.imgAndTitle}>
                    <Image style={style.img} source={require('../icons/not_free/hamburguer.png')} alt='hamburguer name'/>
                    <Text style={style.name}>
                        {item.name}
                    </Text>
                </View>
                <Text style={style.ingredients}>
                    {item.ingredients}
                </Text>
                <Text style={style.price}>
                    {`R$ ${item.price},00`}
                </Text>
            </View>
            <View style={style.makeOrder}>
                <TouchableOpacity style={style.button} onPress={decreaseQtd}>
                    <Text style={style.minusText}>-</Text>
                </TouchableOpacity>
                <View style={style.qtd}>
                    <Text style={style.qtdText}>{qtd}</Text>
                </View>
                <TouchableOpacity style={style.button} onPress={increaseQtd}>
                    <Text style={style.plusText}>+</Text>
                </TouchableOpacity>

                <Text style={style.itemsTotal}>{`Valor Total: R$ ${itemsValue},00`}</Text>

                <TouchableOpacity style={style.addButton}>
                    <Text style={style.addText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}