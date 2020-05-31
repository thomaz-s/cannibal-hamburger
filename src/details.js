import * as React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'

export function DetailsScreen({ route, navigation }) {
    const cart = 'Seu pedido:\n\n1 Canibal\n1 nativo\n\nValor Total: R$18:00'
    return (
      <ScrollView style={styles.cart}>
          <Text style={styles.cartText}>{cart}</Text>
          <TextInput style={styles.obsInput}
          onChangeText={obs => {obs}}
          placeholder={"Observações..."}
          multiline={true}/>
          <View style={styles.groupButtons}>
              <TouchableOpacity style={styles.cartButtons} onPress={()=>{}}>
                  <Text style={styles.cartButtonText}>Enviar Pedido</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cartButtons} onPress={()=>{}}>
                  <Text style={styles.cartButtonText}>Imprimir</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cartButtons} onPress={()=>{navigation.goBack()}}>
                  <Text style={styles.cartButtonText}>Voltar</Text>
              </TouchableOpacity>
          </View>
      </ScrollView>
    );
  }