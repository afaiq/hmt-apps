
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
    WebView
} from "react-native";
// import { Ionicons } from '@expo/vector-icons';

import { Container, Content, Icon, Button } from 'native-base'
import CustomHeader from './components/CustomHeader'

class ISMCScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "ISMC XI",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../assets/ismc.png')}
                style={styles.icon}
            />

    })

    render() {
        return (

            <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>

                <CustomHeader
                    title="ISMC XI"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <WebView
                    source={{uri: 'http://ismc-itb.com/'}}
                />
            </Container>
        )
    }

}

export default ISMCScreen

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20
    }
})
