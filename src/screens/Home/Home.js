import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../../components/Title/Title'

const Home = () => {
  return (
    <View>
         <Title></Title>
         <view>
              <Image style={styles.logo} source={{uri:'https://i.ibb.co/pnXVgdK/quiz-word-concept-23-2147852942.png',}}></Image>
              <TouchableOpacity>start</TouchableOpacity>
         </view>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
     container:{
          padding:10
     },
     logo:{
          width:100,
          height:100
     }
})