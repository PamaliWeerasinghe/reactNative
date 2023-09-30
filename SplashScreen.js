import { View ,StyleSheet, Text, ImageBackground, SafeAreaView, Image, Pressable} from 'react-native';


const image = {uri: 'https://i.pinimg.com/564x/e7/0c/98/e70c9896709e02e9c92c2bfa1639a78f.jpg'};

export function SplashScreen({navigation}){
  const ui=(
  <SafeAreaView style={styles.mainView1}>
     
    <View style={styles.splashView1}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.splashView3}>
        <Image source={{uri:"https://cdn3.iconfinder.com/data/icons/food-and-restaurant-14/512/Restaurant_Image_all-05-512.png"}} style={styles.logo}/>
        </View>
        <View style={styles.splashView4}>
          <Text style={styles.splashText1}>SCOOP</Text>
        </View>
          
      </ImageBackground>
      
    </View>
   
   <Image source={{uri:"https://storyset.com/illustration/login/rafiki#BA68C8FF&hide=&hide=false"}}/>
    <View style={styles.splashView2}>
      <Pressable style={styles.splashBtn1}
      onPress={() =>
        navigation.navigate('Select type')
      }
      >
        <Text style={styles.splashText2}>GET STARTED</Text>
      </Pressable>
      <Pressable style={styles.splashBtn2}
       onPress={() =>
        navigation.navigate('Register Suppliers')
      }
      >
        <Text style={styles.splashText3}>SKIP THIS STEP</Text>
      </Pressable>
     
    </View>
    <View style={styles.splashView5}>
            <View style={styles.splashView6}></View>
    </View>
    
   
  </SafeAreaView>
  
 
   
  
  );
  return ui;
}

const styles=StyleSheet.create(
    {
        mainView1:{
            flex:1,
            
          },
          splashView1:{
            flex:7,
          },
          image:{
            flex:1,
            justifyContent: 'center',
          },
          splashView2:{
            flex:1,
            //padding:40,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            gap:13,
          },
          text: {
            color: 'white',
            fontSize: 42,
            lineHeight: 84,
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: '#000000c0',
          },
          logo:{
            width:170,
            height:170,
          },
          splashView3:{
            paddingHorizontal:110,
            marginTop:60,
          },
          splashText1:{
            fontFamily:"Oswald-Medium",
            fontSize:50,
            fontWeight:"bold",
            color:"#4F2D47"
          },
          splashView4:{
           // marginTop:10,
           paddingHorizontal:112,
          },
          splashBtn1:{
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
          splashBtn2:{
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
          splashText2:{
            fontSize:15,
            color:"#754369",
            fontWeight:"bold"
          },
          splashText3:{
            fontSize:15,
            fontWeight:"bold",
            color:"white",
          },
          splashView5:{
            //flexDirection:"column",
            paddingBottom:25,
            alignItems:"center",
           
          },
          splashView6:{
            backgroundColor:"#800080",
            width:"40%",
            height:2,
          },
         
        
        });
