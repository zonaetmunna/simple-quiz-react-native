import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../../components/Title/Title'

const Home = () => {
  return (
    <View>
         <Title />
         <View style={styles.bannerContainer}>
               <Image 
                    style={styles.banner}
                    resizeMode="contain"  
                    source={{uri:'https://i.ibb.co/pnXVgdK/quiz-word-concept-23-2147852942.png',}}
               />
         </View>
         <TouchableOpacity>
              <Text>start</Text>
         </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
     container:{
          padding:10
     },
     bannerContainer:{
          justifyContent:'center',
          alignItems:'center'
     },
     banner:{
          width:300,
          height:300    
     }
     
})