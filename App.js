import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import {hamburger} from './menu.json';

export default class App extends Component{
    
    //Variável global estado
    state = {
        hamburger: [],
        showSideMenu: false
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
            
            <View style={styles.selectQtd}>
                <TouchableOpacity style={styles.buttonQtd} onPress={()=>{this.increaseItem(parseInt(item._id)-1)}}>
                    <Text style={styles.plusSignal}>+</Text>
                </TouchableOpacity>
                <View style={styles.viewQtd}>
                    <Text style={styles.textQtd}>{item.qtd}</Text>
                </View>
                <TouchableOpacity style={styles.buttonQtd} onPress={()=>{this.decreaseItem(parseInt(item._id)-1)}}>
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

    //fazer a confirmação aparecer ou sumir
    toggleSideMenu(showSideMenu){
        this.setState({showSideMenu});
    }

    calcCart(){
        const total = this.state.hamburger;
        let cart = [];
        for (var hamburger of total){
            if (hamburger.qtd != "0"){
                cart.push(hamburger.name + ": " + hamburger.qtd);
            }
        }
        return cart;
    }

    //método obrigatório (fiz igual nas aulas)
    render(){
        this.calcCart();
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('./menu.png')} onPress={()=>{this.toggleSideMenu(true)}}/>
                    <Text style={styles.headerText}>Cannibal Hamburger</Text>
                </View>
                <FlatList contentContainerStyle={styles.list}
                data={this.state.hamburger}
                keyExtractor={item=>item._id}
                renderItem={this.renderItem}/>
                    <View style={this.state.showSideMenu?styles.confirmCart:styles.deleteConfirm}>
                        
                        <Text style={styles.confirmText}>Adicionado com Sucesso!</Text>
                        <Text style={styles.confirmText}>{this.calcCart().join("\n")}</Text>
                        
                        <TouchableOpacity style={styles.cartButtons} onPress={()=>{}}>
                            <Text style={styles.buttonBackText}>Finalizar Pedido</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cartButtons} onPress={()=>{this.toggleSideMenu(false)}}>
                            <Text style={styles.buttonBackText}>Voltar</Text>
                        </TouchableOpacity>

                    </View>
            </View>
        );
    }
}

//Estilização
const styles = StyleSheet.create({

    //Plano de fundo
    container:{
        flex: 1,
        backgroundColor: "#111",
    },

    //View: Imagem de menu e título
    header:{
        height: 60,
        position: "relative",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#000",
        padding: 5
    },

    //Text: texto cannibal hamburger
    headerText:{
        color: "#FFF",
        width: "70%"
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
    selectQtd:{
        justifyContent: "center",
        alignItems: "center",
        width: "20%"
    },

    //View: quadrado com a quantidade
    viewQtd:{
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
    buttonQtd:{
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

    //View: fundo transparente
    transparentBg:{
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center"
    },

    //Veiw: mensagem de confirmação
    confirmCart:{
        width: "80%",
        minHeight: "45%",
        backgroundColor: "#ccc",
        borderRadius: 8,
        borderColor: "#fff",
        borderWidth: 3,
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    //View: desaparecer mensagem de confirmação
    deleteConfirm:{
        display: "none"
    },

    //Text: Adicionado com Sucesso!
    confirmText:{
        //marginTop: 20,
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center",
    },

    //TouchableOpacity: botão voltar e finalizar
    cartButtons:{
        alignItems: "center",
        justifyContent: "center",
        height: 42,
        width: "70%",
        backgroundColor: "#bbb",
        borderWidth: 1,
        borderRadius: 4
    },

    //Text: Voltar
    buttonBackText:{
        fontSize: 16,
        color: "#000",
        fontWeight: "bold"
    }
});