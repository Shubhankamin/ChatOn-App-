import { View, Text, TouchableOpacity, FlatList , Image} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button } from 'react-native-paper';
import { FontAwesome6 } from '@expo/vector-icons';

const messageData=[{
  id:'1',
  name:'john',
  lastSeen:'2 hours ago',
  text:'Hey Whats Up?',
//   profilePic:'https://picsum.photos/200'

},
{
  id:'2',
  name:'smith',
  lastSeen:'2 hours ago',
  text:'Lets meet in the noon!'
  
  

  
},
{
  id:'3',
  name:'aron',
  lastSeen:'2 hours ago',
  text: 'Good Morning'
}

];

const MessageCard=({Name,lastSeen,text,index})=>{
  const navigation=useNavigation();

  const handleMessagePress=()=>{
    navigation.navigate('Chat',{contactName:Name, lastSeen,text});
  }
  return(
    <TouchableOpacity onPress={handleMessagePress}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 35,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* <Ionicons name="add-circle-outline" size={50} color="grey"  style={{marginRight:20, paddingBottom:0}}/> */}
      
        <Image source={{uri:'https://picsum.photos/200'}} style={{ width: 41, height: 41, borderRadius: 35, marginRight: 10 , right:10}} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: '500', paddingBottom:5,left:10,color:'#262626'}}>{Name}</Text>
          <Text style={{fontSize:13,fontWeight:500, color:"#FF9134",left:10}}>{text}</Text>

         
        </View>
       
      </View>
      

      <TouchableOpacity onPress={handleMessagePress}>
      {/* <Ionicons name="chatbox-outline" size={24} color="#03bafc" /> */}
      
      <Text style={{ color: '#D4D4D4', paddingBottom:20,fontSize:10}}>{lastSeen}</Text>
     {index===0 && <Avatar.Text size={20} label={'1'} backgroundColor={'#FF9134'} style={{left:30}}/>}
    
      </TouchableOpacity>
    </View>
    </TouchableOpacity>



    
  )
}

const message = () => {
  // const profilePic =require('E:\React Native\ChatApp\images\profilePic.png');
  const handleAddContact = () => {
    console.log('Add Contact Pressed');
  };
  const renderItem =({item,index})=>(
    <MessageCard
    // profilePic={item.profilePic}
    Name={item.name}
    lastSeen={item.lastSeen}
    text={item.text}
    index={index}/>
  )
  
  

return(
  <View style={{ }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height:100,
          marginTop:0,
          paddingHorizontal: 20,
          paddingVertical: 10,
        //   backgroundColor: 'white', 
        //   elevation: 2, 
        //   shadowColor: '#000',
        //   shadowOffset: { width: 0, height: 2 },
        //   shadowOpacity: 0.3,
        }}
      >
        
        <TouchableOpacity onPress={handleAddContact}>
        <FontAwesome6 name="add" size={30} color="#A3A3A3" style={{top:15}}/>
        </TouchableOpacity>

        
        <Text style={{ fontSize: 22, fontWeight: 700, paddingTop:30, color:'#262626'}}>Chats</Text>

        
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        {/* <Ionicons name="add-circle-outline" size={24} color="white"  style={{paddingTop:30}}/> */}
          <Image
            source={{uri:'https://picsum.photos/200'}}
            style={{ width: 38, height: 38, borderRadius: 22, top:10 }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
    data={messageData}
    keyExtractor={(item)=>item.id}
    renderItem={renderItem}/>
  

      
      
    </View>

    
);
      }

export default message