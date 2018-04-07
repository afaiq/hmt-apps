import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
    WebView,
    ActivityIndicator,
    Button,
    Linking,
    WebBrowser
} from "react-native";
import HTML from 'react-native-render-html';
// import { Ionicons } from '@expo/vector-icons';

import { Container, Content, Icon, List, ListItem, Body } from 'native-base'
import CustomHeader from './components/CustomHeader'

class KajianScreen extends Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('http://hmt.mining.itb.ac.id/wp-json/wp/v2/posts?categories=9')
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
        title: "Info Kajian",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../assets/open-book.png')}
                style={styles.icon}
            />

    })

    render() {
        if(this.state.isLoading){
            return(
                <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, backgroundColor: 'white'}}>
                    <CustomHeader
                        title="Info Kajian"
                        drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                    />
                    <ActivityIndicator size="large" color="#B22222" style={{flex: 1, justifyContent: 'center'}} />
                </Container>
            )
        }

        return (
            
            <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, backgroundColor: 'white'}}>

                <CustomHeader
                    title="Info Kajian"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <Content style={{flex: 1}}>
                    <List dataArray={this.state.dataSource}
                        renderRow={(item) =>
                        <ListItem>
                            <Body style={{padding: 10}} >
                                <Text style={{fontSize: 20, fontWeight: 'bold'}} >{item.title.rendered}</Text>
                                
                                <HTML
                                    html = {item.excerpt.rendered === '' ? '<p>Tidak ada Preview</p>\n' : item.excerpt.rendered}
                                />
                                <Button title="See More" color="red" onPress={ ()=>{ Linking.openURL([item.link].toString())}} />
                            </Body>
                        </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        )
    }

}

export default KajianScreen

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20
    }
})
