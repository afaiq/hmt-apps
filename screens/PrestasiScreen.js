
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
    ActivityIndicator,
    FlatList,
    Dimensions
} from "react-native";
// import { Ionicons } from '@expo/vector-icons';

import { Container, Content, Icon, Button, ListItem } from 'native-base'
import CustomHeader from './components/CustomHeader'

class PrestasiScreen extends Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('http://hmt.mining.itb.ac.id/wp-json/wp/v2/media?parent=453')
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
        title: "Prestasi",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../assets/trophy.png')}
                style={styles.icon}
            />

    })

    render() {
        if(this.state.isLoading){
            return(
                <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, backgroundColor: 'white'}}>
                    <CustomHeader
                        title="Prestasi"
                        drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                    />
                    <ActivityIndicator size="large" color="#B22222" style={{flex: 1, justifyContent: 'center'}} />
                </Container>
            )
        }

        return (
            <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, backgroundColor: 'white'}}>
                <CustomHeader
                    title="Prestasi"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => 
                        <Image
                            resizeMode='center'
                            style={{flex:1, height: Dimensions.get('window').height - (Platform.OS === 'ios' ? 65 : (Expo.Constants.statusBarHeight + 55))}} 
                            source = {{uri: item.source_url}}
                        />
                    }
                    keyExtractor={(item, index) => index}
                />
            </Container>
        )
    }

}

export default PrestasiScreen

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20
    }
})
