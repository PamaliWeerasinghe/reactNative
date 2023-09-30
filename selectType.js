
import {StyleSheet, ImageBackground, SafeAreaView,Text,View, Pressable  } from 'react-native';
const image = {uri: 'https://i.pinimg.com/564x/e7/0c/98/e70c9896709e02e9c92c2bfa1639a78f.jpg'};

export function SelectType({navigation}){
    const ui=(
        <SafeAreaView style={styles.mainView}>
             <ImageBackground source={image} resizeMode="cover" style={styles.loginImage}>
                <View style={styles.view1}>
                <Text style={styles.text1}>Are you a ?</Text>
                </View>
    <View style={styles.splashView2}>
      <Pressable style={styles.splashBtn2}
      onPress={() =>
        navigation.navigate('Login')
      }
      >
        <Text style={styles.splashText2}>MANAGER</Text>
      </Pressable>
      <Pressable style={styles.splashBtn2}
       onPress={() =>
        navigation.navigate('Supplier Login')
      }
      >
        <Text style={styles.splashText2}>SUPPLIER</Text>
      </Pressable>
     
    </View>
   
             </ImageBackground>

        </SafeAreaView>
    );
    return ui;

}

const styles=StyleSheet.create({
    mainView:{
        flex:1,
    },
    loginImage:{
        flex:1,
        justifyContent: 'center',
        //alignItems:"center",
      
    },
    view1:{
        marginTop:-100,
        marginLeft:150,
    },
    text1:{
        fontSize:20,
        fontWeight:'bold',
    },
    splashView2:{
        //flex:1,
        //padding:40,
        marginTop:60,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:13,
    },
    splashBtn1:{
        width:182,
        height:52,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#D287DE",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
        //padding:10,
     },
     splashBtn2:{
        width:182,
        height:52,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#dda0dd",
        backgroundColor:"#dda0dd",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
      },
      splashText2:{
        fontSize:15,
        color:"white",
        fontWeight:"bold"
      },
     

});