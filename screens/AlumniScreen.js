
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

class AlumniScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Portal Alumni",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../assets/graduate-cap.png')}
                style={styles.icon}
            />

    })

    render() {
        return (

            <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>

                <CustomHeader
                    title="Portal Alumni"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <WebView
                    source={{uri: 'http://goo.gl/forms/Uyxe4jYYti'}}
                />
            </Container>
        )
    }

}

export default AlumniScreen

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20
    }
})
