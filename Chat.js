import { View ,StyleSheet, Text,  SafeAreaView, Image, Pressable  } from 'react-native';

export function Chat({navigation}){
    const ui=(
      <SafeAreaView style={styles.chatMainView}>
        <View style={styles.chatView1}>
          <Image source={{uri:"https://i.pinimg.com/564x/45/db/a3/45dba398c52aa68d7bf77003e3bf8104.jpg"}} style={styles.chatImg}/>
        </View>
        <View style={styles.chatView2}>
          <Text style={styles.chatText1}>Able to chat with the Supplier 24/7 and Restock the Products </Text>
        </View>
      <View style={styles.chatView3}>
        <Pressable style={styles.chatBtn1}
        onPress={() =>
          navigation.navigate('Stock Updation')
        }>
          <Text style={styles.chatText2}>BACK</Text>
        </Pressable>
        <Pressable style={styles.chatBtn2}
         onPress={() =>
          navigation.navigate('Login')
        }>
          <Text style={styles.chatText3}>SKIP THIS STEP</Text>
        </Pressable>
   
      </View>
      <View style={styles.chatView4}>
          <View style={styles.chatView5}></View>
      </View> 
     
  
  </SafeAreaView>
    );
    return ui;
  
  }
  const styles=StyleSheet.create(
    {
        chatView5:{
            backgroundColor:"#800080",
            width:"40%",
            height:2,
          },
          chatView4:{
            paddingBottom:25,
            alignItems:"center",
          },
          chatText3:{
            fontSize:15,
            fontWeight:"bold",
            color:"white",
          },
          chatBtn2:{
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
          chatText2:{
            fontSize:15,
            color:"#754369",
            fontWeight:"bold"
          },
          chatBtn1:{
            width:162,
            height:52,
            borderStyle:"solid",
            borderWidth:1,
            borderColor:"#D287DE",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:8,
          },
          chatView3:{
            flex:1,
            //padding:40,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            gap:13,
            marginTop:150,
          },
          chatText1:{
            fontSize:20,
            color:"black",
            fontFamily:"Montserrat-Light",
            textAlign:"center",
          },
          chatView2:{
            marginTop:30,
            justifyContent:"center",
            alignItems:"center",
          },
          chatImg:{
            width:300,
            height:300,
          },
          chatView1:{
            marginTop:60,
            justifyContent:"center",
            alignItems:"center",
          },
          chatMainView:{
            flex:1,
            backgroundColor:"white",
          },
    }
  );