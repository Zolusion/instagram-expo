import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {USERS.map((story, index) => (
            <View key={index} style={{ alignItems: 'center' }}>
              <Image source={{ uri: story.image }} style={ styles.story } />
              <Text style={{ color: 'white'}}>{
                story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...' 
                : story.user.toLowerCase()}
              </Text>
            </View>
          ))}
      </ScrollView>
    
    </View>
  )
}

const styles = StyleSheet.create({
  story: {
    width: 72,
    height: 75,
    borderRadius: 50,
    marginLeft: 13,
    borderWidth: 3,
    borderColor: 'orange',
  },
})

export default Stories