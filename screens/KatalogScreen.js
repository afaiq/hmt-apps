
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
    Dimensions,
    WebView
} from "react-native";
// import { Ionicons } from '@expo/vector-icons';

import { Container, Content, Icon, Button } from 'native-base'
import CustomHeader from './components/CustomHeader'

const pdfuri = Platform.OS === 'ios' ? 'http://hmt.mining.itb.ac.id/wp-content/uploads/2018/03/24106_katalog-hmt-vol-2.pdf' : 'https://drive.google.com/viewerng/viewer?embedded=true&url=http://hmt.mining.itb.ac.id/wp-content/uploads/2018/03/24106_katalog-hmt-vol-2.pdf';

class KatalogScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Katalog Badan Usaha",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../assets/pamphlet.png')}
                style={styles.icon}
            />

    })

    render() {
        return (

            <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>

                <CustomHeader
                    title="Katalog Badan Usaha"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <WebView
                    source={{uri: pdfuri}}
                />
            </Container>
        )
    }

}

export default KatalogScreen

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20
    }
})
