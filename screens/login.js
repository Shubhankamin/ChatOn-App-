import { View, Text, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react';

const login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError('Password is required');
      return false;
    }
    setPasswordError('');
    return true;
  };
  const handleLogin = () => {
    if (validateEmail() && validatePassword()) {
      navigation.navigate('Contact');
    }
    
  };
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
      <ImageBackground source={require('../images/bgnew.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
         <View style={{elevation:10,backgroundColor:'white',margin:10,paddingHorizontal:15,paddingVertical:10,height:520,width:410, borderTopLeftRadius:80,marginTop:420 }}>
        <Text style={{color:'#FF9134', fontSize:39, fontWeight:700, paddingTop:25, paddingLeft:130, }}>LOGIN</Text>
        <View style={{flexDirection:'row', gap:20, alignItems:'center',marginLeft:50, marginTop:70}}>
        <MaterialCommunityIcons name="email" size={24} color="#C5C5C7" style={{}}/>
        <TextInput placeholder='abc@gmail.com' style={{borderBottomWidth:1, borderColor:'#FF9134', width:200}}keyboardType='email-address'onChangeText={(text)=>setEmail(text)}onBlur={validateEmail}>

        </TextInput>

        </View>
        {emailError ? <Text style={{ color: 'red', marginLeft: 90 }}>{emailError}</Text> : null}
        <View style={{flexDirection:'row', gap:20, alignItems:'center', marginLeft:50, marginTop:50}}>
        <FontAwesome5 name="lock" size={24} color="#C5C5C7" style={{}}/>
        <TextInput placeholder='password' style={{borderBottomWidth:1, borderColor:'#FF9134', width:200}}keyboardType='visible-password'onChangeText={(text)=>setPassword(text)}onBlur={validatePassword}>


        </TextInput>


        </View >

        {passwordError ? <Text style={{ color: 'red', marginLeft: 90 }}>{passwordError}</Text> : null}

          


        <View style={{flexDirection:'column', marginTop:50}}>
        <TouchableOpacity style={{backgroundColor: '#FF9134',
                padding: 10,
                borderRadius: 10,
                alignItems: 'center',
                height: 50, 
                width:310,
                marginLeft:35,
                justifyContent: 'center',}}
                onPress={handleLogin}>
          <Text style={{fontSize:17, fontWeight:600, color:'white'}}>Login</Text>
        </TouchableOpacity>
        <Text style={{color:'black', fontSize:14, textAlign:'center', marginTop:15}}>
          Don't have an account? {''}
          <Text onPress={()=>navigation.navigate('SignUp')}style={{color:'#FF9134'}}>SignUp</Text>

        </Text>

        </View>
        

        
      </View>

     
     
        

      </ImageBackground>

    </View>
   
  )
}

export default login