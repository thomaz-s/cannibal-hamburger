import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import {hamburger} from './menu.json';

export default class App extends Component{
    
    //Variável global estado
    state = {
        hamburger: [],
        cart: [],
        showCart: false,
        obs: ""
    };
    
    //Executando assim que o componente é montado (fiz igual na aula)
    componentDidMount(){
        this.loadProducts();
    }
    
    //Coloar o objeto hamburger no estado
    loadProducts = () => {
        this.setState({hamburger});
    };

    //Renderiza os itens da FlatList
    renderItem = ({item}) => (
        <View style={styles.productContainer}>
            
            <View style={styles.productDescripion}>
                <Text style={styles.productTitle}>{item.name}</Text>
                <Text style={styles.productIngredients}>{item.ingredients}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
            </View>
            
            <View style={styles.qtdContainer}>
                <TouchableOpacity style={styles.qtdButton} onPress={()=>{this.increaseItem(parseInt(item._id)-1)}}>
                    <Text style={styles.plusSignal}>+</Text>
                </TouchableOpacity>
                <View style={styles.qtdBox}>
                    <Text style={styles.textQtd}>{item.qtd}</Text>
                </View>
                <TouchableOpacity style={styles.qtdButton} onPress={()=>{this.decreaseItem(parseInt(item._id)-1)}}>
                    <Text style={styles.minusSignal}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    //Aumenta a quantidade do hamburger
    increaseItem(_id) {
        const hamburger = this.state.hamburger;
        hamburger[_id].qtd = parseInt(hamburger[_id].qtd)+1;
        this.setState({hamburger});
    }

    //Diminui a quantidade do hamburger
    decreaseItem(_id){
        const hamburger = this.state.hamburger;
        if (hamburger[_id].qtd == "0") return;
        hamburger[_id].qtd = parseInt(hamburger[_id].qtd)-1;
        this.setState({hamburger});
    }

    //fazer o carrinho aparecer ou sumir
    toggleSideMenu(showCart){
        this.setState({showCart});
    }

    calcCart(){
        const hamburgers = this.state.hamburger;
        let cart = [];
        let message = "Seu pedido:\n\n";
        let totalValue = 0;
        for (var hamburger of hamburgers){
            if (hamburger.qtd != "0"){
                cart.push(hamburger);
            }
        }

        if (cart.length < 1){
            message = "\n\nVocê não adicionou nenhum item!\n\n";
        }else{
            cart.forEach(item=>{
                message+=`${item.name}: ${item.qtd}\n`;
                totalValue+=parseInt(item.qtd)*parseFloat(item.numericPrice);
            });
            message = `${message}\nValor total: R$ ${String(totalValue)},00`;
        }

        return message;
    }

    //método obrigatório (fiz igual nas aulas)
    render(){
        return (
            <View style={styles.totalContainer}>
                <ScrollView style={this.state.showCart?styles.cart:styles.delete}>
                    <Text style={styles.cartText}>{this.calcCart()}</Text>
                    <TextInput style={styles.obsInput}
                    onChangeText={obs => {this.setState({obs})}}
                    placeholder={"Observações..."}
                    multiline={true}/>
                    <View style={styles.groupButtons}>
                        <TouchableOpacity style={styles.cartButtons} onPress={()=>{}}>
                            <Text style={styles.cartButtonText}>Enviar Pedido</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cartButtons} onPress={()=>{}}>
                            <Text style={styles.cartButtonText}>Imprimir</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cartButtons} onPress={()=>{this.toggleSideMenu(false)}}>
                            <Text style={styles.cartButtonText}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <FlatList contentContainerStyle={this.state.showCart?styles.delete:styles.list}
                data={this.state.hamburger}
                keyExtractor={item=>item._id}
                renderItem={this.renderItem}/>

                <View style={this.state.showCart?styles.delete:styles.footer}>
                    <Text style={styles.headerText} onPress={()=>{this.toggleSideMenu(true)}}>Finalizar Pedido</Text>
                </View>

            </View>
        );
    }
}
