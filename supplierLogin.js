import React, { useState } from 'react';
import { Alert, View ,StyleSheet, Text, ImageBackground, SafeAreaView, Image, Pressable, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback,Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const image = {uri: 'https://i.pinimg.com/564x/e7/0c/98/e70c9896709e02e9c92c2bfa1639a78f.jpg'};

export function SupplierLogin({navigation}){
  
  
    const [mobile,setMobile]=useState(null);
    const [password,setPassword]=useState(null);
   
    const ui=(
      <SafeAreaView style={styles.loginmainView1}>
        <ImageBackground source={image} resizeMode="cover" style={styles.loginImage}>
        <View style={styles.loginView1}>
        <Image source={{uri:"https://cdn3.iconfinder.com/data/icons/food-and-restaurant-14/512/Restaurant_Image_all-05-512.png"}} style={styles.loginLogo}/>
        </View>
        <View style={styles.loginView2}>
          <Text style={styles.loginText1}>LOGIN</Text>
        </View>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' :'height'} style={styles.keyboardAvoidingView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginInner}>
            <Text style={styles.loginMobileText}>Mobile</Text>
            <TextInput 
            placeholder="E.g:- 0778901110" 
            style={styles.textInput} 
            inputMode={"numeric"} 
            maxLength={10}
            onChangeText={setMobile}
            />
            <Text style={styles.loginMobileText}>Password</Text>
            <TextInput  
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={setPassword}
  
            />
            <View style={styles.btnContainer}>
              <View style={styles.loginView4}>
              <Pressable style={styles.loginBtn1} onPress={SupplierLoginProcess}>
                <Text style={styles.loginText2}>Login</Text>
              </Pressable>
            </View>
            <View style={styles.loginView4}>
            <Pressable style={styles.loginBtn2}
             onPress={() =>
          navigation.navigate('Register Manager')
        }
            >
              <Text style={styles.loginText3}>Doesn't have an account? Register</Text>
            </Pressable>
          </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        
        <View style={styles.loginView6}>
          <View style={styles.loginView7}></View>
        </View> 
  
      </KeyboardAvoidingView>
        
        </ImageBackground>
      </SafeAreaView>
      
      
    );
    return ui;
  
    function SupplierLoginProcess(){
      
      var jsRequestObject={"mobile":mobile,"password":password};
      var jsonRequestText=JSON.stringify(jsRequestObject);
      
      var formData=new FormData();
      formData.append("jsonSignInDetails",jsonRequestText);
  
      var request=new XMLHttpRequest();
      request.onreadystatechange=function(){
        if(request.readyState==4&&request.status==200){
          var jsonresponseText=request.responseText;
          var jsResponseObject=JSON.parse(jsonresponseText);
          Alert.alert(jsRequestObject);
          if(jsResponseObject.msg=="Invalid"){
            Alert.alert("Message","Invalid Details");
          }else{
            //var userObject=jsResponseObject.manager;
           
            Alert.alert("Message","Hello "+jsResponseObject.manager.fname);
            AsyncStorage.setItem("manager",JSON.stringify(jsResponseObject.manager));
            
            navigation.navigate('Home');
            
          }
  
        }
      };
      request.open("POST","http://localhost/reactNative/iceCream_php/supplierSignIn.php",true);
      request.send(formData);
    }
  
  }

  const styles=StyleSheet.create({
    loginInner: {
        padding:14,
        flex: 1,
        gap:10,
        //justifyContent: 'space-around',
      },
      loginMobileText: {
        fontSize:18,
        color:"black",
        //marginBottom: 48,
      },
      textInput: {
        borderStyle:"solid",
        borderColor:"#4b0082",
        borderWidth:1,
        borderRadius:8,
      },
      btnContainer: {
        backgroundColor: 'transparent',
        marginTop:55,
        gap:15,
      },
      keyboardAvoidingView:{
        flex:1,
      },
      loginView7:{
        backgroundColor:"#800080",
        width:"40%",
        height:2,
      },
      loginView6:{
        paddingBottom:10,
        alignItems:"center",
      },
      loginView5:{
        marginTop:50,
      },
      loginText3:{
        color:"white",
        fontSize:18,
      },
      loginBtn2:{
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#D287DE",
        backgroundColor:"#D287DE",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
        padding:8,
      },
      loginView4:{
        padding:1,
        
      },
      loginBtn1:{
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#dda0dd",
        backgroundColor:"#dda0dd",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
        padding:8,
      },
      loginInput1:{
        borderStyle:"solid",
        borderColor:"#4b0082",
        borderWidth:1,
        borderRadius:8,
      },
      loginText2:{
        color:"black",
        fontSize:18,
      },
      loginView3:{
        //marginTop:10,
        padding:10,
        gap:10,
      },
      loginText1:{
        fontFamily:"Oswald-Medium",
        fontSize:40,
        fontWeight:"bold",
        color:"#4F2D47"
      },
      loginView2:{
        paddingHorizontal:130,
        marginBottom:40,
      },
      loginmainView1:{
        flex:1,
      },
      loginView1:{
          paddingHorizontal:100,
          marginTop:50,
      },
      loginLogo:{
    
        width:170,
        height:170,
      },
      loginImage:{
          flex:1,
          justifyContent: 'center',
          //alignItems:"center",
        
      },
      loginMainView:{
        flex:1,
      },
  });