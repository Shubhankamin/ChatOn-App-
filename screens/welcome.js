import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Welcome = ({ navigation }) => {
  const handleLetsGoPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/ChatON.png')} style={styles.backgroundImage}>
        <TouchableOpacity style={styles.letsGoButton} onPress={handleLetsGoPress}>
          <Text style={styles.buttonText}>Join Now</Text>
          
        </TouchableOpacity>
        <View  style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'black', fontSize:14, textAlign:'center', }}>
          Already have an account? {''}
          <Text onPress={()=>navigation.navigate('Login')} style={{color:'white',}}>Login</Text>

        </Text>

        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letsGoButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop:590,
    width:330,
    marginBottom:10
  },
  buttonText: {
    color: '#FF9134',
    fontSize: 21,
    fontWeight:'500',
    textAlign:'center'
  },
});

export default Welcome;
