import { View, Text, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';


const signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateName = () => {
    if (!name.trim()) {
      setNameError('Name is required');
      return false;
    }
    setNameError('');
    return true;
  };

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
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSignup = () => {
    if (validateName() && validateEmail() && validatePassword()) {
      // Perform signup logic here
      navigation.navigate('Contact');
    }
  };

  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'pink'}}>
      <ImageBackground source={require('../images/bgnew.jpg')}>
      <View style={{elevation:10,backgroundColor:'white',margin:10,paddingHorizontal:15,paddingVertical:10,height:520,width:410, borderTopLeftRadius:80,marginTop:420 }}>
        <Text style={{color:'#FF9134', fontSize:39, fontWeight:700, paddingTop:25, paddingLeft:120}}>SIGNUP</Text>
        <View style={{flexDirection:'row', gap:20, alignItems:'center',marginLeft:50, marginTop:70}}>
        <FontAwesome name="user" size={24} color="#C5C5C7" />
        <TextInput placeholder='name' style={{borderBottomWidth:1, borderColor:'#FF9134', width:200}}keyboardType='name-phone-pad'onChangeText={(text)=>setName(text)} onBlur={validateName}>

</TextInput>

          
        </View>
        {nameError ? <Text style={{ color: 'red', marginLeft: 90 }}>{nameError}</Text> : null}

        <View style={{flexDirection:'row', gap:20, alignItems:'center',marginLeft:50, marginTop:50}}>
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
        
          


        <View style={{flexDirection:'column', marginTop:30}}>
        <TouchableOpacity style={{backgroundColor: '#FF9134',
                padding: 10,
                borderRadius: 10,
                alignItems: 'center',
                height: 50, 
                width:310,
                marginLeft:35,
                marginBottom:8,
                justifyContent: 'center',}}
                onPress={handleSignup}>
          <Text style={{fontSize:17, fontWeight:500, color:'white'}}>Signup</Text>
        </TouchableOpacity >
        <View  style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'black', fontSize:14, textAlign:'center', }}>
          Already have an account? {''}
          <Text onPress={()=>navigation.navigate('Login')} style={{color:'#FF9134',}}>Login</Text>

        </Text>

        </View>
        

        </View>
        

        
      </View>

      </ImageBackground>

      

      
    
    </View>
  )
}

export default signup