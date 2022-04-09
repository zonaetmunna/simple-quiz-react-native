import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Quiz = () => {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Text>This is question part text</Text>
      </View>

      <View style={styles.option}>
        <TouchableOpacity>
          <Text>this is option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>this is option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>this is option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>this is option 1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomButton}>
        <TouchableOpacity>SKIP</TouchableOpacity>
        <TouchableOpacity>NEXT</TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container:{
    padding:12,
    height:'100%'
  },
  top:{
    paddingVertical:12

  },
  option:{
    marginVertical:12

  },
  bottomButton:{
    justifyContent:'space-between',
    flexDirection:'row'
    

  },
})