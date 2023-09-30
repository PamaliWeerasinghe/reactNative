import { SplashScreen } from "./SplashScreen";
import { RegisterSupplierGuide } from "./RegisterSupplierGuide";
import { RegisterManager } from "./RegisterManager";
import { RegisterProduct } from "./RegisterProduct";
import { Chat } from "./Chat";
import { AddProducts } from "./AddProducts";
import { Login } from "./Login";
import {Home} from "./home";
import { ChatWithSupplier } from "./ChatWithSupplier";
import { LoadSuppliers } from "./LoadSuppliers";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SelectType} from "./selectType";
import { SupplierLogin } from "./supplierLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack=createNativeStackNavigator();
function App(){
    // async function checkManager(){
    //     const manager=await AsyncStorage.getItem("manager");
    //     return manager
    // }
    // checkManager();
    const ui=(
        
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Powered by GIMMICK" component={SplashScreen}/>
                <Stack.Screen name="Select type" component={SelectType}/>
                <Stack.Screen name="Register Manager" component={RegisterManager}/>
                <Stack.Screen name="Register Suppliers" component={RegisterSupplierGuide}/>
                <Stack.Screen name="Stock Updation" component={AddProducts}/>
                <Stack.Screen name="Contacting the suppliers" component={Chat}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Supplier Login" component={SupplierLogin}/>
                {/* <Stack.Screen name='manager!=null?"Home":"Login"' component={Login}/> */}
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Add Product" component={RegisterProduct}/>
               
              
               
                <Stack.Screen name="Suppliers" component={LoadSuppliers}/>
                <Stack.Screen name="Chat With Supplier" component={ChatWithSupplier}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
    return ui;

   
 }
export default App;


