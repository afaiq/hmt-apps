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

class EventScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Event",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../assets/gallery.png')}
                style={styles.icon}
            />
    })

    render() {
        return (
            <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
                <CustomHeader
                    title="Event"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <WebView
                    source= {{uri: 'https://www.dropbox.com/sh/ojaej2y3f3hkop4/AACg0ZjpkCxRdu9MeJiR6SCea?dl=0'}}
                />
            </Container>
        )
    }

}

export default EventScreen

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20
    },
    gridView: {
        paddingTop: 25,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },      
})
