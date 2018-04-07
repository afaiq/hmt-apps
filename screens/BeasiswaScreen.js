import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
    ActivityIndicator,
    Dimensions,
} from "react-native";
// import { Ionicons } from '@expo/vector-icons';

import { Container, Content, Icon, Button, DeckSwiper, CardItem, Card, Left, Body, Thumbnail } from 'native-base'
import CustomHeader from './components/CustomHeader'
import Header from "react-navigation/src/views/Header/Header";

class BeasiswaScreen extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('http://hmt.mining.itb.ac.id/wp-json/wp/v2/media?parent=523')
            .then((response) => response.json())
            .then((responseJson) => {

            this.setState({
                isLoading: false,
                dataSource: responseJson,
            }, function(){

            });

            })
            .catch((error) =>{
            console.error(error);
            });
    }

    static navigationOptions = ({ navigation }) => ({
        title: "Info Beasiswa",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../assets/scholarship.png')}
                style={styles.icon}
            />

    })

    render() {
        if(this.state.isLoading){
            return(
                <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, backgroundColor: 'white'}}>
                    <CustomHeader
                        title="Info Beasiswa"
                        drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                    />
                    <ActivityIndicator size="large" color="#B22222" style={{flex: 1, justifyContent: 'center'}} />
                </Container>
            )
        }
        
        return (

            <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, backgroundColor: 'white'}}>

                <CustomHeader
                    title="Info Beasiswa"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <View>
                    <DeckSwiper
                        dataSource={this.state.dataSource}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem cardBody >
                                    <Image
                                        resizeMode='center'
                                        style={{flex:1, height: Dimensions.get('window').height - (Platform.OS === 'ios' ? 65 : (Expo.Constants.statusBarHeight + 55))}} 
                                        source={{uri: item.source_url}} 
                                    />
                                </CardItem>
                            </Card>
                        }
                    />
                </View>
            </Container>
        )
    }

}

export default BeasiswaScreen

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
