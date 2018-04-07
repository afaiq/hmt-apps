
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
    TouchableOpacity,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    ActivityIndicator,
    PixelRatio,
    Linking
} from "react-native";

import {Agenda} from 'react-native-calendars'
import HTML from 'react-native-render-html';
import Modal from "react-native-modal"
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog'
import * as firebase from 'firebase'
// import { Ionicons } from '@expo/vector-icons';

import { Container, Content, Icon } from 'native-base'
import CustomHeader from './components/CustomHeader'

const firebaseConfig = {
    apiKey: "AIzaSyCotZbz8B2s2jAQ_3mSNeYDEZa8DzCKGxI",
    authDomain: "hmt-apps-198603.firebaseapp.com",
    databaseURL: "https://hmt-apps-198603.firebaseio.com",
    storageBucket: "hmt-apps-198603.appspot.com"
};

firebase.initializeApp(firebaseConfig);

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;
  
export function normalize(size) {
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(size))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
    }
}
  
class AnggotaScreen extends Component {
    constructor() {
        super();
        console.ignoredYellowBox = [
        'Setting a timer'
        ];
    }
        
        
    state = {
        loggedIn: false,
        nimValidate: true,
        tryAgain: false,
        nim: '',
        pass: '',
        angkatan:'',
        nama: '',
        ttl: '',
        alamat: '',
        hp: '',
        darurat: '',
        isModalVisible: false,
        items: {}
    };
    
    validate(text, type) {
        num = /^[0-9]*$/
        if (type == 'nim') {
            if (num.test(text)) {
                this.setState({nim: text, nimValidate: true})
            } else {
                this.setState({nimValidate: false})
            }
        }
    }
    
    static navigationOptions = ({ navigation }) => ({
        title: "Portal Anggota",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../assets/users.png')}
                style={styles.icon}
            />

    })

    login(nim, pass) {
        let users = firebase.database().ref('users')
        users.orderByKey().equalTo(nim).on('child_added', (snapshot) => {
            if (snapshot.child('password').val() == pass) {
                this.setState({
                    tryAgain: false, 
                    loggedIn: true, 
                    angkatan: snapshot.child('angkatan').val(),
                    nama: snapshot.child('name').val(),
                    ttl: snapshot.child('ttl').val(),
                    alamat: snapshot.child('alamat').val(),
                    hp: snapshot.child('hp').val(),
                    darurat: snapshot.child('darurat').val(),
                })
            } else {
                this.setState({tryAgain: true})
            }
        })
    }

    ubahPassword() {
        let user = firebase.database().ref('users/' + this.state.nim)
        user.update({
            password: this.state.pass
        })
    }

    getImage(nim) {
        let images = firebase.storage()
        imageRef = images.ref('images/')
        imageRef.child(this.state.angkatan + '/' + this.state.nim + '.jpg').getDownloadURL()
            .then((url) => {
                this.setState({imgurl: url})
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    isTryAgain() {
        if (this.state.tryAgain) {
            return (
                <Text style={{alignSelf: 'center', color: 'red', paddingBottom: 10}} >
                    NIM atau password salah
                </Text>
            )
        }
    }

    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    loadItems(day) {

    }
        
    renderItem(item) {
        return (
            <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
        );
    }
        
    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }
        
    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }
        
    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
        
    render() {
        var the_date = new Date();
        var date = the_date.getDate() > 10 ? the_date.getDate() : '0' + the_date.getDate() ;
        var month = the_date.getMonth()+1 > 10 ? the_date.getMonth() + 1 : '0' + (the_date.getMonth() + 1);
        var today = the_date.getFullYear() + '-' + month + '-' + date;

        if (!this.state.loggedIn) {
            return (
                <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, backgroundColor:'white'}}>
                    <CustomHeader
                        title="Portal Anggota"
                        drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                    />
                    <KeyboardAvoidingView  behavior='padding' style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View>
                            <TextInput
                                placeholder='NIM'
                                style={[styles.input, !this.state.nimValidate ? styles.inputError : null]}
                                underlineColorAndroid='#fff'
                                returnKeyType='next'
                                onSubmitEditing={() => this.passInput.focus()}
                                keyboardType='numeric'
                                onChangeText={nim => this.validate(nim, 'nim')}
                            />
                            <TextInput
                                placeholder='password'
                                style={styles.input}
                                underlineColorAndroid='#fff'
                                returnKeyType='go'
                                secureTextEntry
                                ref={ref => this.passInput = ref}
                                onChangeText={pass => this.setState({pass})}
                                onSubmitEditing={() => this.login(this.state.nim, this.state.pass)}
                            />
                            {this.isTryAgain()}
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.login(this.state.nim, this.state.pass)} >
                                <Text style={styles.buttonText}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </Container>
            )
        } else {
            return (
                <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, backgroundColor: 'white'}}>
                    <CustomHeader
                        title="Portal Anggota"
                        drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                    />
                    <Content contentContainerStyle={{ flex: 1 }}>
                        <Modal isVisible={this.state.isModalVisible} onBackdropPress={this._toggleModal} backdropOpacity = {1} >
                            <Agenda
                                items={this.state.items}
                                loadItemsForMonth={this.loadItems.bind(this)}
                                selected={today}
                                renderItem={this.renderItem.bind(this)}
                                renderEmptyDate={this.renderEmptyDate.bind(this)}
                                rowHasChanged={this.rowHasChanged.bind(this)}
                            />
                        </Modal>
                        <PopupDialog
                            dialogTitle={<DialogTitle title="Ubah Password" />}
                            ref={(ubahpass) => { this.ubahpass = ubahpass; }}
                        >
                            <KeyboardAvoidingView style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                                <TextInput
                                    placeholder='password'
                                    style={styles.input}
                                    underlineColorAndroid='#fff'
                                    returnKeyType='go'
                                    secureTextEntry
                                    ref={ref => this.ubah = ref}
                                    onChangeText={pass => this.setState({pass})}
                                    onSubmitEditing={() => this.ubahPassword()}
                                />
                                <TouchableOpacity style={[styles.buttonContainer, {width: Dimensions.get('window').width / 2}]} onPress={() => this.ubahPassword()} >
                                    <Text style={styles.buttonText}>UBAH</Text>
                                </TouchableOpacity>
                            </KeyboardAvoidingView>
                        </PopupDialog>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: Dimensions.get('window').width / 9, paddingVertical: 20}}>
                            <TouchableOpacity style={styles.tombol} onPress={() => { Linking.openURL('https://www.dropbox.com/sh/xrp1m4ncdh039ib/AAAPWNpzbgnNdIEwBp1RkvkZa?dl=0')}} >
                                <Image
                                    style={styles.tombolIcon}
                                    source={require('../assets/database.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tombol} onPress={this._toggleModal}>
                                <Image
                                    style={styles.tombolIcon}
                                    source={require('../assets/calendar.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tombol} onPress={ ()=>{ Linking.openURL('https://www.dropbox.com/sh/iu12aseoiz2nerq/AADOFUdl6JAbCPLsFZYACqSHa?dl=0')}}>
                                <Image
                                    style={styles.tombolIcon}
                                    source={require('../assets/document.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{justifyContent: 'center'}}>
                            {this.getImage(this.state.nim)}
                            <Image
                                resizeMode= 'center'
                                style= {{width: Dimensions.get('window').width * 2 / 3, height: Dimensions.get('window').width * 2 / 3, alignSelf:'center'}}
                                source={{uri: this.state.imgurl}}
                            />
                            <View style={{backgroundColor: '#575756', marginTop: 20, marginHorizontal: Dimensions.get('window').width / 9, padding: 5}}>
                                <Text style={styles.info}>
                                    Nama: {this.state.nama}
                                </Text>
                                <Text style={styles.info}>
                                    NIM: {this.state.nim}
                                </Text>
                                <Text style={styles.info}>
                                    Tempat, Tanggal Lahir: {this.state.ttl}
                                </Text>
                                <Text style={styles.info}>
                                    Alamat: {this.state.alamat}
                                </Text>
                                <Text style={styles.info}>
                                    No. Telepon: {this.state.hp}
                                </Text>
                                <Text style={styles.info}>
                                    No. Darurat: {this.state.darurat}
                                </Text>
                            </View>
                        </View>

                        <View flexDirection='row' justifyContent='flex-end' style={{paddingHorizontal: Dimensions.get('window').width / 9, paddingTop: 20}} >
                            <TouchableOpacity onPress={() => this.ubahpass.show()} >
                                <Text>
                                    ubah password
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Content>
                </Container>
            )
        }
    }

}

export default AnggotaScreen

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20
    },
    tombol: {
        width: Dimensions.get('window').width / 9,
        height: Dimensions.get('window').width / 9,
        borderColor: '#575756',
        borderStyle: 'solid',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tombolIcon: {
        width: (Dimensions.get('window').width / 9) - 26,
        height: (Dimensions.get('window').width / 9) - 26,
    },
    input: {
        height: 40,
        width: Dimensions.get('window').width / 2,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    inputError: {
        borderWidth: 3,
        borderColor: 'red'
    },
    buttonContainer: {
        backgroundColor: '#575756',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    info: {
        color: '#fff',
        fontSize: normalize(16),
        padding: 5
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    }
    
})
