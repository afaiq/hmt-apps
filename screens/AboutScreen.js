import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
    WebView,
    ScrollView
} from "react-native";
// import { Ionicons } from '@expo/vector-icons';

import { Container, Content, Icon, Button } from 'native-base'
import CustomHeader from './components/CustomHeader'

class AboutScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "About Us",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../assets/information.png')}
                style={styles.icon}
            />

    })

    render() {
        return (
            <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, backgroundColor: 'white'}}>
                <CustomHeader
                    title="About Us"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <Content contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.lambangView}>
                        <Image 
                            source={require('../assets/icon.png')}
                            style={styles.lambang}    
                        />
                    </View>
                    <View style={styles.contentView}>
                        <Text style={{justifyContent: 'space-between' }} >
                            <Text style={{fontWeight: 'bold', color: 'red'}}> 
                                Himpunan Mahasiswa Tambang Institut Teknologi Bandung (HMT-ITB){' '}
                            </Text>
                            lahir pada tanggal 15 Mei 1955 dan diresmikan pada tanggal 16 Maret 1967.{"\n"}{"\n"}
                            <Text style={{fontWeight: 'bold', color: 'red'}}>
                                Tujuan HMT:{"\n"}
                            </Text>
                            1.{"\t"}Menciptakan, memelihara ikatan kekeluargaan yang erat di antara para mahasiswa Jurusan Teknik Pertambangan Institut Teknologi Bandung, serta melangsungkan ikatan yang kekal setelah tamat belajar{"\n"}{"\n"}
                            2.{"\t"}Membina, mengembangkan, serta menyebarkan kecintaan pada ilmu pertambangan kepada anggota khususnya, masyarakat umumnya{"\n"}{"\n"}
                            3.{"\t"}Mengusahakan kesejahteraan material maupun spiritual serta membela kepentingan anggotanya {"\n"}{"\n"}
                        </Text>
                    </View>
                    <View>
                        <Image
                            resizeMode = 'center'
                            source = {{uri: 'http://hmt.mining.itb.ac.id/wp-content/uploads/2018/03/bagan.jpg'}}
                            style={{height: 300, width: 300}}
                        />
                    </View>
                </Content>
            </Container>
        )
    }

}

export default AboutScreen

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20
    },
    lambang: {
        height: 100,
        width: 100,
    },
    lambangView: {
        paddingTop: 30,
    },
    contentView: {
        padding: 30,
    }
})
