import React, { useState } from 'react';
import {Alert, View ,StyleSheet, Text, ImageBackground, SafeAreaView, Image,  TextInput,FlatList, ScrollView,TouchableOpacity,Pressable  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const image = {uri: 'https://i.pinimg.com/564x/e7/0c/98/e70c9896709e02e9c92c2bfa1639a78f.jpg'};

export function LoadSuppliers({navigation}){
   
    const [searchText,setSearchText]=useState("");
    const [items,setItems]=useState([
      {
        pic:"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/11-Telemarketer-512.png",
        name:"Sahan Perera",
        msg:"You're welcome",
        time:"9.39 PM",
        count:"8",
        id:"1"
    
      },
    ]);
    
    const [name,setName]=useState(null);
    const[img,setImage]=useState(null);
    //const[category,setCategory]=useState(null);
    //const [pic,setPic]=useState(null);
    async function m(){
      const  userJsonText=await AsyncStorage.getItem("manager");
      //const  userJsonText2=await AsyncStorage.getItem("category_data");
      const  userJSObject=JSON.parse(userJsonText);
      //const  userJSObject2=JSON.parse(userJsonText);
      var fullName=userJSObject.fname+" "+userJSObject.lname
      setName(fullName);
      setImage(userJSObject.profile_img);
      //setCategory(userJSObject.type);
      //setPic(userJSObject.prof)
  
      const formData=new FormData();
      formData.append("userJSONText",userJsonText);
      formData.append("text",searchText);

      
      var request=new XMLHttpRequest();
      request.onreadystatechange=function(){
        if(request.readyState==4 && request.status==200){
          var responseText=request.responseText;
          setItems(JSON.parse(responseText));
          // Alert.alert(responseText);
        }
      }
      request.open("POST","http://10.0.2.2/reactNative/iceCream_php/loadSuppliers.php",true);
      request.send(formData);
    }
    
    m();
    
    const ui=(
      <SafeAreaView style={styles.loadSuppliersMainView}>
         <ImageBackground source={image} resizeMode="cover">
          <View style={styles.loadSuppliersView1}>
          
          <Text style={styles.chatWithSupplierText2}>{name}</Text>
          {/* <Text style={styles.chatWithSupplierText2}>{category}</Text> */}
          <Image source={{uri:`${img}`}} style={styles.managerLogo}/>
  
          </View>
         
        <View style={styles.homeView1}>
          <TextInput style={styles.homeInput1} autoCorrect={false} onChangeText={setSearchText}/>
          <TouchableOpacity onPress={m}>
            <Icon name="search" size={22} color="black" style={styles.homeImg1}/>
          </TouchableOpacity>
         
        </View>
        <ScrollView style={styles.ScrollView}>
        <FlatList data={items} renderItem={itemUI}/>
        </ScrollView>
    
        <View style={styles.chatSendView3}>
              <View style={styles.chatSendView4}></View>
        </View> 
        
       
         </ImageBackground>
      </SafeAreaView>
    );
  
    return ui;

    function itemUI({item}){
      var  name=item.fname+" "+item.lname;
     
      var supID=item.id;
      //Alert.alert(supID);
      //var stringSupID=String(supID)
      const ui=(
       
        <Pressable style={styles.homeView3}
        onPress={loadSupplierChat}
        >
             <View style={styles.homeView2}>
        <Image source={{uri:`${item.pic}`}} style={styles.itemImage}/>
        <View style={styles.itemView1}>
          
          <Text style={styles.itemText1}>{name}</Text>
          <Text style={styles.itemText2}>{item.msg}</Text>
        
        </View>
        <View style={styles.itemView2}>
          <Text>{item.time}</Text>
          <View style={styles.itemShape1}>
            <Text style={styles.itemShapeText1}>{item.count}</Text>
          </View>
         
        </View>
    
      </View>
        </Pressable>
       
      );
      return ui;
      function loadSupplierChat(){
        const obj = {
          name:name,
          id:supID,
          //img: 'http://10.0.2.2/react_chat/' + item.pic,
        };
        navigation.navigate('Chat With Supplier', obj);
      }
    }
  }

 
  
  const styles=StyleSheet.create({
    ScrollView:{
      //marginHorizontal:20,
      height:500,
    },
    managerLogo:{
        width:80,
        height:80,
      },
      homeView3:{
        padding:10,
      },
      itemShapeText1:{
        fontSize:16,
        fontWeight:"bold",
        color:"white",
      },
      itemShape1:{
        backgroundColor:"#520c61",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        width:26,
        height:26,
      },
      itemView2:{
        width:"19%",
        alignItems:"flex-end",
        justifyContent:"center",
      },
      itemText2:{
        fontSize:16,
        color:"white",
      },
      itemText1:{
        fontSize:18,
        //fontWeight:"bold",
        color:"black",
      },
      itemView1:{
        width:"60%",
        paddingHorizontal:10,
        justifyContent:"center",
      },
      itemImage:{
        height:80,
        width:80,
        borderRadius:45,
      },
      homeView2:{
        flexDirection:"row",
        padding:15,
        backgroundColor:"#e1bbd9",
        borderRadius:10,
      },
      homeImg1:{
        marginTop:-15,
        position:"absolute",
        right:28,
      },
      homeInput1:{
        height:40,
        borderStyle:"solid",
        borderWidth:1,
        width:"100%",
        borderRadius:18,
        paddingLeft:15,
        paddingRight:50,
        padding:8,
        fontSize:20,
        borderColor:"#2b2b2b",
      },
      homeView1:{
        flexDirection:"row",
        alignItems:"center",
        padding:20,
       
      },
      homeText1:{
        fontSize:28,
        paddingVertical:15,
        fontFamily:"julee",
        color:"black",
      },
      loadSuppliersView1:{
        flexDirection:"row",
        //justifyContent:"center",
        justifyContent:"flex-end",
        alignItems:"center",
        height:100,
        padding:10,
        gap:10,
      },
      loadSuppliersMainView:{
        flex:1,
      },
      chatWithSupplierText2:{
        fontWeight:"bold",
        fontSize:20,
        
      },
      chatSendView4:{
        backgroundColor:"#800080",
        width:"40%",
        height:2,
      },
      chatSendView3:{
        //padding:1,
        //paddingTop:10,
        paddingBottom:5,
        alignItems:"center",
      },
  });