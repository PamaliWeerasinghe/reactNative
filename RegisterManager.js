import React, { useState } from 'react';
import { Alert, View ,StyleSheet, Text, ImageBackground, SafeAreaView,Pressable, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const image = {uri: 'https://i.pinimg.com/564x/e7/0c/98/e70c9896709e02e9c92c2bfa1639a78f.jpg'};

export function RegisterManager({navigation}){
    const[mobileNumber,setMobileNumber]=useState("");
    const[managerFname,setManagerFname]=useState("");
    const[managerLname,setManagerLname]=useState("");
    const[managerPassword,setManagerPassword]=useState("");
    const[reTypePassword,setReTypePassword]=useState("");
    const[profileImage,setProfileImage]=useState(null);
  
    const ui=(
      <SafeAreaView style={styles.registerManagerMainView}>
     
         <ImageBackground source={image} resizeMode="cover">
          <View style={styles.registerManagerView1}>
             
            {/* <Text style={styles.registerManagerText1}>REGISTER MANAGER</Text> */}
            <Pressable style={styles.registerManagerLogo1} onPress={selectProfilePicture}>
              <Icon name={"camera"} size={24}/>
            </Pressable>
            {/* <Button title='Set Image' onPress={selectProfilePicture}/> */}
          </View>
          <View style={styles.registerManagerView7}>
            <View style={styles.registerManagerView8}>
              <Text style={styles.registerManagerMobileText}>First Name</Text>
              <TextInput  style={styles.textInput} onChangeText={setManagerFname} />
            </View>
            <View style={styles.registerManagerView8}>
              <Text style={styles.registerManagerMobileText}>Last Name</Text>
              <TextInput  style={styles.textInput} onChangeText={setManagerLname} />
            </View>
          </View>
          <View style={styles.registerManagerView2}>
              <Text style={styles.registerManagerMobileText}>Mobile</Text>
              <TextInput placeholder="E.g:- 0778901110" style={styles.textInput} inputMode={"numeric"} maxLength={10} onChangeText={setMobileNumber}/>
          </View>
          <View style={styles.registerManagerView2}>
              <Text style={styles.registerManagerMobileText}>Password</Text>
              <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={setManagerPassword}/>
          </View>
          <View style={styles.registerManagerView2}>
              <Text style={styles.registerManagerMobileText}>Re-Enter Password</Text>
              <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={setReTypePassword}/>
          </View>
          <View style={styles.registerManagerView3}>
              <Pressable style={styles.registerManagerBtn1} onPress={signUpRequest}>
                <Text style={styles. registerManagerText2}>Register</Text>
              </Pressable>
          </View>
          <View style={styles.registerManagerView4}>
              <Pressable style={styles.registerManagerBtn2}
              onPress={() =>
                navigation.navigate('Login')
              }
              >
                <Text style={styles. registerManagerText3}>Already have an account? Login</Text>
              </Pressable>
          </View>
          <View style={styles.registerManagerView5}>
              <View style={styles.registerManagerView6}></View>
          </View> 
          </ImageBackground>
          
      </SafeAreaView>
    );
    async function selectProfilePicture(){
      const options={
       mediaType:"photo",
      };
      const result= await launchImageLibrary(options);
  
      if(result.didCancel){
        Alert.alert("Message","No image selected");
        
      }else{
       const imageObject={
        "uri":result.assets[0].uri,
        "name":"profile.jpeg",
        "type":"image/jpeg"
       };
  
       setProfileImage(imageObject);
  
      }
    }
    function signUpRequest(){
       //Alert.alert(profileImage.uri);
      var fname=managerFname;
      var lname=managerLname;
      var passowrd=managerPassword;
      var retypePassword=reTypePassword;
      var mobile=mobileNumber;
      
     
      var form=new FormData();
  
      form.append("mobile",mobile);
      form.append("profile_picture",profileImage);
      form.append("fname",fname);
      form.append("lname",lname);
      form.append("password",passowrd);
      form.append("reTypePassword",retypePassword);
  
      var request=new XMLHttpRequest();
      
      request.onreadystatechange=function(){
          if(request.readyState==4&&request.status==200){
             Alert.alert("Message",request.responseText);
             navigation.navigate("Register Manager")
          }
      };
    
      request.open("POST","http://10.0.2.2/reactNative/iceCream_php/signUp.php",true);
      request.send(form);
    }
    return ui;
  } 
  
  const styles=StyleSheet.create({
    registerManagerView7:{
        flexDirection:"row",
      },
    
      registerManagerMobileText:{
        fontSize:18,
        color:"black",
      },
      registerManagerText3:{
        color:"white",
        fontSize:18,
      },
      registerManagerView6:{
        backgroundColor:"#800080",
        width:"40%",
        height:2,
      },
      registerManagerView5:{
        //padding:1,
        paddingTop:25,
        //paddingBottom:10,
        alignItems:"center",
      },
      registerManagerText2:{
        fontSize:18,
      },
      registerManagerBtn2:{
        padding:8,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#D287DE",
        backgroundColor:"#D287DE",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
      },
      registerManagerView4:{
        paddingLeft:10,
        paddingRight:10,
        
      },
      registerManagerBtn1:{
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#dda0dd",
        backgroundColor:"#dda0dd",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
        padding:8,
      },
      registerManagerView3:{
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
        paddingTop:15,
        marginTop:20,
      },
      registerManagerView8:{
        padding:10,
        width:"50%",
        marginTop:30,
        
      },
      registerManagerView2:{
        padding:10,
        
        
      },
      registerManagerText1:{
        fontFamily:"Oswald-Medium",
        fontSize:26,
        fontWeight:"bold",
        color:"#4F2D47"
      },
      registerManagerLogo:{
        width:170,
        height:170,
      },
      registerManagerLogo1:{
        width:133,
        height:133,
        backgroundColor:"#fff0f5",
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
      },
      registerManagerView1:{
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        
      },
      registerManagerMainView:{
        flex:1,
       
      },
      textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        //marginBottom: 36,
      },
  });