import React, { useState } from 'react';
import {Alert, View ,StyleSheet, Text, ImageBackground, SafeAreaView, Image,  TextInput,FlatList, ScrollView,TouchableOpacity,Pressable  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const image = {uri: 'https://i.pinimg.com/564x/e7/0c/98/e70c9896709e02e9c92c2bfa1639a78f.jpg'};



export function Home({navigation}){

   
   
    const [items,setItems]=useState([
      {
            pic:"https://cdn2.iconfinder.com/data/icons/custom-ios-14-1/60/Chat-256.png",
            name:"CONTACT SUPPLIERS",
            //msg:"Total no. of Active Suppliers",
            navigate:'Suppliers',
            //count:SupplierCount,
            id:"3"
        
      },
      {
        pic:"https://cdn0.iconfinder.com/data/icons/basic-e-commerce-line-color/48/Package_box_add-512.png",
        name:"ADD PRODUCT",
        //msg:"Total no. of Products",
        navigate:'Add Product',
        //count:"8",
        id:"1"
    
      },
      {
        pic:"https://cdn1.iconfinder.com/data/icons/shopping-234/64/shopping_red_outline_best_seller-512.png",
        name:"ADD SUPPLIER",
        //msg:"Total no. of Suppliers",
        navigate:'Suppliers',
        //count:"8",
        id:"2"
    
      },
      {
        pic:"https://cdn1.iconfinder.com/data/icons/furniture-423/64/book_rack_cabinet_decoration_furniture-256.png",
        name:"ADD CATEGORY",
        //msg:"Total no. of Suppliers",
        navigate:'Suppliers',
        //count:"8",
        id:"4"
    
      },
    ]);
    
   

    
    const ui=(
      <SafeAreaView style={styles.loadSuppliersMainView}>
         <ImageBackground source={image} resizeMode="cover">
         <View style={styles.loginView1}>
        <Image source={{uri:"https://cdn3.iconfinder.com/data/icons/food-and-restaurant-14/512/Restaurant_Image_all-05-512.png"}} style={styles.loginLogo}/>
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
      //var  name=item.fname+" "+item.lname;
     
      //var directTo=item.navigate;
      //Alert.alert(supID);
      //var stringSupID=String(supID)
      const ui=(
       
        <Pressable style={styles.homeView3}
        onPress={() =>
            navigation.navigate(item.navigate)
          }
        >
             <View style={styles.homeView2}>
        <Image source={{uri:`${item.pic}`}} style={styles.itemImage}/>
        <View style={styles.itemView1}>
          
          <Text style={styles.itemText1}>{item.name}</Text>
         
        
        </View>
        <View style={styles.itemView2}>
          <Text></Text>
          {/* <View style={styles.itemShape1}>
            <Text style={styles.itemShapeText1}>{item.count}</Text>
          </View> */}
         
        </View>
    
      </View>
        </Pressable>
       
      );
      return ui;
     
    }
  }

 
  
  const styles=StyleSheet.create({
    loginLogo:{
    
        width:140,
        height:140,
      },
    loginView1:{
        paddingHorizontal:100,
        marginTop:20,
        marginLeft:30,
    },
    ScrollView:{
      //marginHorizontal:20,
      //marginTop:80,
      //marginBottom:20.
    },
    managerLogo:{
        width:80,
        height:80,
      },
      homeView3:{
        padding:10,
        gap:10,
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
        textAlign:"center",
      },
      itemText1:{
        fontSize:18,
        //fontWeight:"bold",
        color:"#4F2D47",
        textAlign:"center",
        fontWeight:"bold",
      },
      itemView1:{
        width:"60%",
        paddingHorizontal:20,
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
        //justifyContent:"flex-end",
        //alignItems:"center",
        height:100,
        //padding:10,
        gap:10,
      },
      loadSuppliersMainView:{
        //flex:1,
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