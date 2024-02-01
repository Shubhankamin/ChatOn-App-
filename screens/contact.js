import { View, Text, TouchableOpacity, FlatList , Image} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';



const contactData=[{
  id:'1',
  name:'john',
  lastSeen:'2 hours ago',
  profilePic:require('../images/ProfileImage1.png')

},
{
  id:'2',
  name:'smith',
  lastSeen:'2 hours ago',
  profilePic:require('../images/ProfileImage2.png')

  
},

{
  id:'3',
  name:'aron',
  lastSeen:'2 hours ago',
  profilePic:require('../images/ProfileImage3.png')
},
{
  id:'4',
  name:'Virat',
  lastSeen:'1 hours ago',
  profilePic:require('../images/ProfileImage4.png')
},
{
  id:'5',
  name:'Finch',
  lastSeen:'5 hours ago',
  profilePic:require('../images/ProfileImage5.png')
},
{
  id:'6',
  name:'Butler',
  lastSeen:'1 hours ago',
  profilePic:require('../images/ProfileImage6.png')
},
{
  id:'7',
  name:'Warner',
  lastSeen:'2 hours ago',
  profilePic:require('../images/ProfileImage7.png')
},
{
  id:'8',
  name:'Marcus',
  lastSeen:'2 hours ago',
  profilePic:require('../images/ProfileImage8.png')
}

];

const ContactCard=({Name,lastSeen,profilePic})=>{
  const navigation=useNavigation();
  console.log(profilePic,'image');

  const handleContactPress=()=>{
    navigation.navigate('Chat',{contactName:Name, lastSeen,profilePic:profilePic});
  }
  return(
    <TouchableOpacity onPress={handleContactPress}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* <Ionicons name="add-circle-outline" size={24} color="grey"  style={{marginRight:20}}/> */}
        <Image source={profilePic} style={{ width: 38, height: 38, borderRadius: 35, marginRight: 10 ,right:10}} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: 500, color:'#262626' }}>{Name}</Text>
          <Text style={{ color: '#BDBDBD' }}>{`Last seen: ${lastSeen}`}</Text>
        </View>
       
      </View>
      

      <TouchableOpacity onPress={handleContactPress}>
      <Ionicons name="chatbox-outline" size={24} color="#FF9134" />
       
      </TouchableOpacity>
    </View>
    </TouchableOpacity>



    
  )
}

const contact = () => {
  // const profilePic =require('E:\React Native\ChatApp\images\profilePic.png');
  const handleAddContact = () => {
    console.log('Add Contact Pressed');
  };
  const renderItem =({item})=>(
    <ContactCard
    // profilePic={item.profilePic}
    Name={item.name}
    lastSeen={item.lastSeen}
    profilePic={item.profilePic}/>
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
          // backgroundColor: , 
          // elevation: 2, 
          // shadowColor: '#000',
          // shadowOffset: { width: 0, height: 2 },
          // shadowOpacity: 0.3,
        }}
      >
        
        <TouchableOpacity onPress={handleAddContact}>
        <FontAwesome6 name="add" size={30} color="#A3A3A3" style={{top:15}}/>
        </TouchableOpacity>

        
        <Text style={{ fontSize: 22, fontWeight: 900, paddingTop:30, color:'#262626',}}>Contacts</Text>

        
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        {/* <Ionicons name="add-circle-outline" size={24} color="white"  style={{paddingTop:30}}/> */}
          <Image
            source={require('../images/ProfileImage1.png')}
            style={{ width: 44, height: 44, borderRadius: 22 ,top:10}}
          />
        </TouchableOpacity>
      </View>
      <FlatList
    data={contactData}
    keyExtractor={(item)=>item.id}
    renderItem={renderItem}/>
  

      
      
    </View>

    
);
      }

export default contact