import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { chat, contact, login,message,signup ,welcome} from './screens';
import home from './screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const Stack=createNativeStackNavigator();

const Tab = createBottomTabNavigator();



const screenOpions={
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position:"absolute",
    bottom:0,
    right:0,
    left:0,
    elevation:0,
    height:0,
    background:'white'
  },

};

const TabNavigator=()=>{
  return(
    <Tab.Navigator screenOptions={screenOpions} initialRouteName='Contact'>
      <Tab.Screen
      name='Contact'
      component={contact}
      options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center', justifyContent:'center'}}>
           <MaterialIcons name='perm-contact-cal' size={24} color={focused ? '#16247d' : '#111'} />
           <Text style={{fontSize:12, color:'black',}}>Contact
            </Text> 

          </View>
        ),
      }}
      />
      <Tab.Screen
      name='Message'
      component={message}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name='chatbubble-outline' size={24} color={focused ? '#16247' : '#111'} />
            <Text style={{ fontSize: 12, color: 'black' }}>Message</Text>
          </View>
        ),
      }}
      />
    </Tab.Navigator>
  )

}






export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Welcome'>
        <Stack.Screen name='Login' component={login} options={{
          headerShown:false
        }}/>


        <Stack.Screen name='Welcome' component={welcome} options={{
          headerShown:false

        }}/>

        <Stack.Screen name='SignUp' component={signup} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='Contact' component={contact} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='Main' component={TabNavigator}/>
        <Stack.Screen name='Chat' component={chat} options={{headerShown:false}}/>

        <Stack.Screen name='Message' component={message}options={{headerShown:false}}/>
        
         
        

      </Stack.Navigator>
      
      
    </NavigationContainer>
  );


  
}