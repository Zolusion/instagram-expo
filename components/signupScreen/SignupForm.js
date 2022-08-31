import { View, TextInput, StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Validator } from 'email-validator'

const SignupForm = ({navigation}) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string()
        .required()
        .min(6, 'Password must be at least 6 characters long')
    })

    return (
        <View style={styles.wrapper}>
            <Formik initialValues={{email: '', username: '', password: ''}}
                    onSubmit={values => {
                        console.log(values) 
                    }}
                    validationSchema={SignupFormSchema}
                    validateOnMount={true}
            >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (     
                    <>
                        <View style={[styles.inputField
                            , { borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red' }
                            ]}
                        >
                            <TextInput 
                                placeholderTextColor='#444'
                                placeholder='Email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                        />
                        </View>

                        <View style={[styles.inputField
                            , { borderColor: values.username.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red' }
                            ]}
                        >
                            <TextInput 
                                placeholderTextColor='#444'
                                placeholder='Username'
                                autoCapitalize='none'
                                keyboardType='username'
                                textContentType='username'
                                autoFocus={true}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                        />
                        </View>
    
                        <View style={[styles.inputField
                            , { borderColor: values.password.length || values.password.length > 1 ? '#ccc' : 'red' }
                            ]}
                        >
                            <TextInput 
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='Password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginBottom: 30}}>
                            <Text style={{ color: '#6BB0F5'}}>Forgot Password?</Text>
                        </View>
                        <Pressable 
                            titleSize={20} 
                            style={styles.button(isValid)} 
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>
    
                        <View style={styles.signupContainer}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ color: '#6BB0F5'}}> Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
      )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },  

    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },

    button: (isValid) => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        minHeight: 42,
    }),

    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 20,
    },

    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 50,
    },


})

export default SignupForm