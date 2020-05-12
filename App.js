import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {hamburger} from './menu.json';

export default class App extends Component{
    
    //Variável global estado
    state = {
        hamburger: [],
        showCart: true,
        padding: [],
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
        const total = this.state.hamburger;
        let cart = [];

        for (var hamburger of total){
            if (hamburger.qtd != "0"){
                cart.push(hamburger.name + ": " + hamburger.qtd);
            }
        }

        if (cart.length < 1){
            for (var i = 0; i<7; i++){
                cart.push("");
            }
            cart[2] = "Você não adicionou nenhum item!";
        }

        return cart;
    }

    //método obrigatório (fiz igual nas aulas)
    render(){
        this.calcCart();
        return (
            <View style={styles.totalContainer}>
                <ScrollView style={this.state.showCart?styles.cart:styles.delete}>
                    <Text style={styles.cartText}>{`Seu pedido: \n\n${this.calcCart().join("\n")}`}</Text>
                    <TextInput style={styles.obsInput}
                    onChangeText={obs => {this.setState({obs})}}
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

//Estilização
const styles = StyleSheet.create({

    //Plano de fundo
    totalContainer:{
        flex: 1,
        backgroundColor: "#111",
    },

    //View: footer com finalizar pedido
    footer:{
        height: 60,
        position: "relative",
        bottom: 0,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#000",
        padding: 5,
        flexDirection: "row",
        justifyContent: "center"
    },

    //Text: texto finalizar pedido
    headerText:{
        color: "#FFF",
        height: "100%",
        width: "100%",
        textAlign: "center",
        textAlignVertical: "center"
    },

    //FlatList: Lista em si, não o conteúdo
    list:{
        padding: 10
    },

    //FlatList.contentContainerStyle: conteúdo da lista (cada item)
    productContainer:{
        backgroundColor: '#000',
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 3,
        padding: 20,
        marginBottom: 15,
        flexDirection: "row",
    },

    //View: onde fica o tílutlo, ingredientes e preço
    productDescripion:{
        width: "80%"
    },

    //Text: nome do hambúrguer
    productTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    //Text: Ingredientes
    productIngredients:{
        fontSize: 15,
        color: '#ccc',
        marginTop: 5,
        lineHeight: 20
    },

    //Text: Preço
    productPrice:{
        fontSize: 18,
        color: '#ddd',
        marginTop: 5,
        lineHeight: 20
    },

    //View: com os botões +, - e a viewQtd
    qtdContainer:{
        justifyContent: "center",
        alignItems: "center",
        width: "20%"
    },

    //View: quadrado com a quantidade
    qtdBox:{
        height: 35,
        width: 35,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#888',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    //Text: texto da viewQtd
    textQtd: {
        fontSize: 16,
        color: "#000"
    },

    //TouchableOpacity + e -
    qtdButton:{
        height: 38,
        width: 38,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#888',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    //Text: sinal de menos vermelho
    minusSignal:{
        fontSize: 16,
        color: "#dd1111",
        fontWeight: 'bold'
    },

    //Text: sinal de mais verde
    plusSignal:{
        fontSize: 16,
        color: "#1111dd",
        fontWeight: 'bold'
    },

    //TouchableOpacity: botão adicionar
    buttonAdd:{
        height: 42,
        width: "40%",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#888',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    //Text: texto do botão adicionar
    productButtonText: {
        fontSize: 16,
        color: "#000",
        fontWeight: 'bold'
    },

    //ScrollVeiw: mensagem de confirmação
    cart:{
        backgroundColor: "#ccc",
        borderRadius: 8,
        borderColor: "#fff",
        borderWidth: 3,
    },

    //View: desaparecer um elemento
    delete:{
        display: "none"
    },

    //Text: Adicionado com Sucesso e itens pedidos!
    cartText:{
        lineHeight: 24,
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center",
        margin: 10,
        alignSelf: "center",
    },

    //InputText: observações
    obsInput: {
        backgroundColor: "#fff",
        width: "80%",
        height: 200,
        margin: 10,
        alignSelf: "center",
        textAlignVertical: "top",
    },

    //View: grupo dos botões
    groupButtons:{
        margin: 10,
        alignItems: "center",
    },

    //TouchableOpacity: botão voltar, imprimir e finalizar
    cartButtons:{
        alignItems: "center",
        justifyContent: "center",
        height: 42,
        width: "70%",
        backgroundColor: "#bbb",
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 10
    },

    //Text: Voltar
    cartButtonText:{
        fontSize: 16,
        color: "#000",
        fontWeight: "bold"
    }
});