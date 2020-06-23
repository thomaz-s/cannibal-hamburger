import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: "#111",
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    itemType:{
        height: 128,
        width: "80%",
        borderWidth: 2,
        borderRadius: 3,
        borderColor: "#555",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24
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

export default styles;