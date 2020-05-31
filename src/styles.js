import {StyleSheet} from 'react-native';

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
        backgroundColor: "#999",
        flex: 1
    },

    //Text: Adicionado com Sucesso e itens pedidos!
    cartText:{
        lineHeight: 24,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        margin: 10,
        alignSelf: "center",
    },

    //InputText: observações
    obsInput: {
        borderRadius: 5,
        lineHeight: 20,
        fontSize: 16,
        backgroundColor: "#fff",
        width: "80%",
        height: 150,
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

export default styles;