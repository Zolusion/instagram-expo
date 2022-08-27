import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home-2.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home-2.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/500/ffffff/search.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-regular.png',
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/shop.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/shop.png',
    }
]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: icon.inactive }} style={styles.icon} />
        </TouchableOpacity>
    )
  return (
    <View>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    }
})

export default BottomTabs