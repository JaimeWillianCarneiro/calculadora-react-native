import { View, Text, StyleSheet } from "react-native-web";


export default function Calculator(){
    return(
        <View>
        
        <View>
            <Text> 0</Text>
        </View>
        </View>
    
    );
    
}

const styles =  StyleSheet.create({
        container:{
            paddingTop: 32
        }, 

        display:{
            fontSize: 56, 
            color: '#ffff'
        }, 
        buttonsView:{
            flexDirection: 'row'
        }, 
        button: {
            width: '25%', 
            backgroundColor:  '#30'
        }
    });