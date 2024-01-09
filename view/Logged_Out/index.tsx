import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Button from '../../component/button'
import { useDispatch } from 'react-redux'
import { setUsername } from '../../redux/action'
import { useTheme } from '../../theme'
import strings from '../../strings/Logged_Out'
import { fontSize } from '../../global'
import { useFocusEffect } from '@react-navigation/native'


const Logged_Out = ({ navigation }) => {

    const theme = useTheme()
    const dispatch = useDispatch()
  
    useFocusEffect(
      React.useCallback(() => {
        checkSession()
        .then((data: any)=> {
          if (data !== null || undefined || '') {
            dispatch(setUsername(data))
            navigation.navigate('Home')
          }
        })
      }, [])
    )
    
    return (
        <View style={style.container}>
            <View
                style={[style.background, {backgroundColor: theme.colors.backgroundColor}]} >
                <View style={style.top_section} >
                    <Image source={require('../../drawable/logo.png')} style={style.image} />
                </View>
                <View style={style.bottom_section}>
                    <Button title={strings.login} bgColor={theme.colors.primary} color={theme.colors.secondary} onPress={() => navigation.navigate('Login')} marginRight={5} flex={1} />
                    <Button title={strings.register} bgColor={theme.colors.secondary} color={theme.colors.primary} onPress={() => navigation.navigate('Register')} marginLeft={5} flex={1} />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        padding: 20,
        flex: 1,
    },
    top_section: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: fontSize(7),
        height: fontSize(7),
        borderRadius: 20
    },
    bottom_section: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
})

export default Logged_Out
