import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    totalContainer:{
        flex: 1,
        backgroundColor: "#000",
    },

    container:{
        alignItems: "center"
    },

    itemType:{
        width: "80%",
        borderWidth: 2,
        borderRadius: 3,
        borderColor: "#555",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 24,
        marginVertical: 10
    },

    foodIcons:{
        height: 96,
        width: 96
    },

    itemName:{
        color: "#fff",
        fontSize: 18
    }
});

export default style;