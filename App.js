import { BlurView } from 'expo-blur';
import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,Button
} from 'react-native';
// import { BlurView } from 'expo-blur';


export default function App(){
  return(
    <View style={styles.container}>
      <View style={{width:100,height:100,backgroundColor:'purple',position:'absolute'}}></View>
      <View style={{width:100,height:100,backgroundColor:'blue',top:120,position:'absolute',transform:[{rotate:'25deg'}]}}></View>
      <View style={{width:100,height:100,backgroundColor:'red',bottom:120,position:'absolute',borderRadius:50,transform:[{rotate:'50deg'}]}}></View>
      <ScrollView contentContainerStyle={{
        flex:1,
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <BlurView intesity={100}>
          <View style={styles.login}>
            <View></View>
            <View></View>
            <TouchableOpacity style={[styles.button,{backgroundColor:'#00CFEB90'},]}>
              <Text style={{fontSize:17,fontWeight:'400',color:'white'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{backgroundColor:'#6792F090'}]}>
            <Text style={{fontSize:17,fontWeight:'400',color:'white'}}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
