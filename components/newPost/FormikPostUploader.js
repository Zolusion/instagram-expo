import { View, Text, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { TextInput } from 'react-native'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'

const PLACEHOLDER_IMG = 'https://www.foliebrie.nl/wp-content/uploads/2021/04/empty.jpg'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the maximum length of 2200 characters'),
})

const FormikPostUploader = ({navigation}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

  return (
    <Formik 
      initialValues={{caption: '', imageUrl: ''}}
      onSubmit={(values) => {
        console.log(values)
        console.log('Your post was submitted successfully')
        NavigationPreloadManager.goBack()
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >

      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
        <>
          <View 
            style={{ 
              margin: 20, 
              justifyContent: 'space-between', 
              flexDirection: 'row' 
            }}>
            <Image 
              source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG }} 
              style={{ width: 100, height: 100 }} 
            />
          
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput 
                style={{ color: 'white', fontSize: 20 }}
                placeholder='Write a caption ...' 
                placeholderTextColor='gray'
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>

          </View>
          <Divider width={0.2} orientation='vertical' />

          <TextInput 
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={{ color: 'white', fontSize: 18 }}
            placeholder='Enter Image Url' 
            placeholderTextColor='gray'
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && ( 
            <Text style={{ fontSize: 10 ,color: 'red' }}>
              {errors.imageUrl}</Text>
          )} 

          <Button onPress={handleSubmit} title='Upload' disabled={!isValid} />
        </>
      )}

    </Formik>
  )
}

export default FormikPostUploader