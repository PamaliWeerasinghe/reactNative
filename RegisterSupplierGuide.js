
import {View ,StyleSheet, Text,  SafeAreaView, Image, Pressable  } from 'react-native';

export function RegisterSupplierGuide({navigation}){
    const ui=(
      <SafeAreaView style={styles.registerMainView}>
          <View style={styles.registerView1}>
            <Image source={{uri:"https://i.pinimg.com/564x/93/0b/2a/930b2a432dd7a5fa0b49ca0584a5ae0b.jpg"}} style={styles.registerImg}/>
          </View>
          <View style={styles.registerView2}>
            <Text style={styles.registerText1}>Register Suppliers and make the Purchasing of Stocks more Easier. </Text>
          </View>
          <View style={styles.registerView3}>
        <Pressable style={styles.registerBtn1}
        onPress={() =>
          navigation.navigate('Powered by GIMMICK')
        }
        >
          <Text style={styles.registerText2}>BACK</Text>
        </Pressable>
        <Pressable style={styles.registerBtn2}
        onPress={() =>
          navigation.navigate('Stock Updation')
        }>
          <Text style={styles.registerText3}>SKIP THIS STEP</Text>
        </Pressable>
       
      </View>
      <View style={styles.registerView4}>
              <View style={styles.registerView5}></View>
      </View>
      
      </SafeAreaView>
    );
    return ui;  
  }
  const styles=StyleSheet.create(
    {
        registerView5:{
            backgroundColor:"#800080",
            width:"40%",
            height:2,
          },
          registerView4:{
            paddingBottom:25,
            alignItems:"center",
          },
          registerBtn2:{
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
          registerText3:{
            fontSize:15,
            fontWeight:"bold",
            color:"white",
          },
          registerText2:{
            fontSize:15,
            color:"#754369",
            fontWeight:"bold"
          },
          registerBtn1:{
            width:162,
            height:52,
            borderStyle:"solid",
            borderWidth:1,
            borderColor:"#D287DE",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:8,
            //padding:10,
          },
          registerView3:{
            flex:1,
            //padding:40,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            gap:13,
            marginTop:150,
          },
          registerText1:{
            fontSize:20,
            color:"black",
            fontFamily:"Montserrat-Light",
            textAlign:"center",
            
          },
          registerView2:{
            //justifyContent:"center",
            //alignItems:"center",
            padding:20,
          },
          registerView1:{
            //flex:1,
            marginTop:60,
            justifyContent:"center",
            alignItems:"center",
            
          },
          registerMainView:{
            flex:1,
            backgroundColor:"white",
          },
          registerImg:{
            width:300,
            height:300,
            
          },
    }
  )
  