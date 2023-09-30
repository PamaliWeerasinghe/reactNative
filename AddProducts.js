import {  View ,StyleSheet, Text,  SafeAreaView, Image, Pressable } from 'react-native';

export function AddProducts({navigation}){
    const ui=(
      <SafeAreaView style={styles.addProductsMainView}>
        <View style={styles.addProductView1}>
          <Image source={{uri:"https://i.pinimg.com/564x/da/b6/10/dab610c811be0587feccc1784114d018.jpg"}} style={styles.addProductImg}/>
        </View>
        <View style={styles.addProductView2}>
          <Text style={styles.addProductText1}>Able to update the Inventory with a glimpse</Text>
        </View>
      <View style={styles.addProductView3}>
        <Pressable style={styles.addProductBtn1}
         onPress={() =>
          navigation.navigate('Register Suppliers')
        }
        >
          <Text style={styles.addProductText2}>BACK</Text>
        </Pressable>
        <Pressable style={styles.addProductBtn2}
        onPress={() =>
          navigation.navigate('Contacting the suppliers')
        }>
          <Text style={styles.addProductText3}>SKIP THIS STEP</Text>
        </Pressable>
   
      </View>
      <View style={styles.addProductView4}>
          <View style={styles.addProductView5}></View>
      </View> 
  
  </SafeAreaView>
    );
    return ui;
  }

  const styles=StyleSheet.create(
    {
        addProductView5:{
            backgroundColor:"#800080",
            width:"40%",
            height:2,
          },
          addProductView4:{
            paddingBottom:25,
            alignItems:"center",
          },
          addProductText3:{
            fontSize:15,
            fontWeight:"bold",
            color:"white",
          },
          addProductBtn2:{
            width:162,
            height:52,
            borderStyle:"solid",
            borderWidth:1,
            borderColor:"#D287DE",
            backgroundColor:"#D287DE",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:8,
          },
          addProductText2:{
            fontSize:15,
            color:"#754369",
            fontWeight:"bold"
          },
          addProductBtn1:{
            width:162,
            height:52,
            borderStyle:"solid",
            borderWidth:1,
            borderColor:"#D287DE",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:8,
          },
          addProductView3:{
            flex:1,
            //padding:40,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            gap:13,
            marginTop:150,
          },
          addProductText1:{
            fontSize:20,
            color:"black",
            fontFamily:"Montserrat-Light",
            textAlign:"center",
          },
          addProductView2:{
            marginTop:30,
            justifyContent:"center",
            alignItems:"center",
          },
          addProductImg:{
            width:300,
            height:300,
          },
          addProductView1:{
            marginTop:60,
            justifyContent:"center",
            alignItems:"center",
          },
          addProductsMainView:{
            flex:1,
            backgroundColor:"white",
          },
    }
  );