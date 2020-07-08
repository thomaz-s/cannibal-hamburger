import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex: 1
    },

    list:{
        backgroundColor: "#000",
    },

    listContent:{
        padding: 10
    },

    itemContainer:{
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "#555",
        padding: 10,
        marginBottom: 10
    },

    nameAndPrice:{
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textNameAndPrice:{
        color: "#fff"
    },

    textIngredients:{
        color: "#555"
    }
});

export default style;