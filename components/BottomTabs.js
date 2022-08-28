import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        inactive: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/500/ffffff/search.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/500/ffffff/video-camera.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/video-camera--v1.png',
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/shop.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/shop.png',
    },
    {
        name: 'Profile',
        active: 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/300378321_1345576509302027_1400591209562011295_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=Kc4G_fO5atEAX9XUZdq&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT8m9PD0No4rfaCyixiP69pAQA5cwdgJzITu8rH98nWu6Q&oe=6311A186&_nc_sid=8fd12b',
        inactive: 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/300378321_1345576509302027_1400591209562011295_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=Kc4G_fO5atEAX9XUZdq&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT8m9PD0No4rfaCyixiP69pAQA5cwdgJzITu8rH98nWu6Q&oe=6311A186&_nc_sid=8fd12b',
    }
]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image 
                source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} 
                style={[
                    styles.icon, 
                    icon.name === 'Profile' ? styles.profilePic() : null,
                    activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : null,
                ]}
            />
        </TouchableOpacity>
    )
  return (
    <View style={styles.wrapper}>
        <Divider width={1} orientation='vertical'/>
        <View style={styles.container}>
        {icons.map((icon, index) => (
            <Icon key={index} icon={icon} />
        ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#000'
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        padding: 10,
    },  

    icon: {
        width: 30,
        height: 30,
    },

    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor: '#fff',

    }),
})

export default BottomTabs