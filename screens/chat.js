import { View, Text, TouchableOpacity, FlatList, TextInput, KeyboardAvoidingView, Platform, ScrollView,Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const chat = ({navigation}) => {

  const route=useRoute();
  const {contactName}=route.params;
  const {profilePic}=route.params;
  console.log(profilePic,'profile');

  const [inputMessage, setInputMessage]=useState('');
  const[chatMessage, setChatMessage]=useState([]);
  const flatListRef=useRef(null);
  // const scrollViewRef=useRef(null);

  const handleSendMessage=()=>{
    if(inputMessage.trim() !==''){
      setChatMessage([...chatMessage, {id:chatMessage.length+1,message:inputMessage, sender:'user'}]);
      setInputMessage('');
    }
  }

  const dummyMessage=[
    {id:1, message:'Hello', sender:'contact'},
    {id:2, message:'Heyy', sender:'user'},

  ];

  const renderChatMessage=({item})=>(
    <View style={{alignSelf:item.sender==='user'?'flex-end' : 'flex-start', margin: 5, padding: 15, backgroundColor: item.sender === 'user' ? '#FF9134' : '#eee', borderRadius: 15, paddingLeft:10,right:10, maxWidth:'70%',}} >
        <Text style={{ color: item.sender === 'user' ? 'white' : 'black' ,flexWrap:'wrap'}}>{item.message}</Text>
    </View>

  );

  useEffect(()=>{
  flatListRef.current.scrollToEnd({animated:true});
  }, [chatMessage]);
  

 
  return (
    <KeyboardAvoidingView behavior={Platform.OS==='android'?'padding':'height'}
    keyboardVerticalOffset={Platform.OS==='android'? 64:0}
    style={{flex:1}}>
      <View>


         <View
       style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        // backgroundColor: '#03bafc',
        // elevation: 2,
        height:100,
        marginTop:10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3,
      }}
      >


            <TouchableOpacity onPress={() => navigation.goBack()}>


            <Entypo name="chevron-thin-left" size={24} color="#A3A3A3" style={{top:10}}/>
            </TouchableOpacity>
        <View
      style={{ flexDirection: 'row', alignItems: 'center' }}
      >
          <Image source={profilePic} style={{ width: 38, height: 38, borderRadius: 35, right:25,top:12}} />
          <View>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#262626' , paddingTop:25,bottom:3}}>{contactName}</Text>
          <Text style={{fontSize:10,fontWeight:500,color:'#FF9134'}}>Online Now</Text>

          </View>
          

        </View>



        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center',}}>

          
          <FontAwesome name="video-camera" size={24} color="#A3A3A3" style={{paddingTop:20,left:7}} />
          <FontAwesome name="phone" size={24} color="#A3A3A3" style={{ marginHorizontal: 15, paddingTop:20,left:10 }} />
        
        </View>

         </View>
      
      <View style={{height:'77%'}}>
        <FlatList
      ref={flatListRef}
      data={[dummyMessage,...chatMessage]}
      keyExtractor={(item)=>item.id}
      renderItem={renderChatMessage}
      contentContainerStyle={{flexGrow:1,paddingVertical:10}}
      
        />

      </View>
      
      <View style={{ bottom:0}}>

         <View style={{flexDirection:'row', alignItems:'center',paddingHorizontal:10,paddingBottom:10,justifyContent:'center' }}>

           <TextInput style={{flex:1, borderWidth:1, borderColor:'#ccc', borderRadius:20, padding:20, marginRight:15,}}
        placeholder='Type a message...'
        value={inputMessage}
        onChangeText={(text)=>setInputMessage(text)}
        />
           <TouchableOpacity onPress={handleSendMessage}>


            <FontAwesome name="send" size={24} color="#FF9134" style={{bottom:5,right:5}} />
          </TouchableOpacity>

         </View>


      </View>


    
          
      
      
      
     </View>

    
    
    </KeyboardAvoidingView>


    
  )
}

export default chat