import React, { useState } from 'react';
import { View ,StyleSheet, Text, ImageBackground, SafeAreaView, Image,TextInput,TouchableWithoutFeedback, Button, Keyboard, FlatList, ScrollView, TouchableOpacity  } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';


const image = {uri: 'https://i.pinimg.com/564x/e7/0c/98/e70c9896709e02e9c92c2bfa1639a78f.jpg'};

const countries = [ "Canada", "Australia", "Ireland"];

export function RegisterProduct(){
  const ui=(
    <SafeAreaView style={styles.registerProductMainView}>
    <TouchableWithoutFeedback>
      <ImageBackground source={image} resizeMode="cover">
        <View style={styles.registerProductView1}>
          <Image source={{uri:"https://cdn3.iconfinder.com/data/icons/food-and-restaurant-14/512/Restaurant_Image_all-05-512.png"}} style={styles.registerManagerLogo}/>
          <Text style={styles.registerProductText1}>ADD PRODUCT</Text>
         
        </View>
        <View style={styles.registerProductView2}>
            <Text style={styles.registerProductText2}>Product Name</Text>
            <TextInput style={styles.loginInput1}/>
        </View>
        <View style={styles.registerProductView2}>
            <Text style={styles.registerProductText2}>Select Supplier</Text>
            <ModalDropdown options={['option 1', 'option 2']} style={styles.signUpInput4} defaultValue={"Select Supplier"} textStyle={{fontSize:16,textAlign:"center"}} dropdownTextStyle={{fontSize:16,}} dropdownStyle={{width:270,}}/>
        </View>
        <View style={styles.registerProductView2}>
            <Text style={styles.registerProductText2}>Select Category</Text>
          
        </View>
      
      </ImageBackground>
    </TouchableWithoutFeedback>
  </SafeAreaView>
  );
  return ui;
}

const styles=StyleSheet.create({
  signUpInput4:{
    //paddingHorizontal:38,
    width:376,
    height:40,
    borderRadius:10,
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"black",
    paddingHorizontal:44,
    //fontSize:50,
    justifyContent:"center",
    
    
  },
  dropdown1:{
    width:200,
  },
    registerProductText2:{
        fontSize:16,
      },
      registerProductView2:{
        padding:10,
      },
      registerProductText1:{
        fontFamily:"Oswald-Medium",
        fontSize:23,
        fontWeight:"bold",
        color:"#4F2D47"
      },
      registerProductView1:{
        justifyContent:"center",
        alignItems:"center",
      },
      registerProductMainView:{
        flex:1,
      },
      loginInput1:{
        borderStyle:"solid",
        borderColor:"#4b0082",
        borderWidth:1,
        borderRadius:8,
      },
      registerManagerLogo:{
        width:170,
        height:170,
      },
});