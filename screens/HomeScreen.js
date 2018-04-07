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
    Dimensions,
    ScrollView,
    Animated,
    TouchableOpacity,
    Linking
} from "react-native";
import HTML from 'react-native-render-html';
import {Constants, Calendar} from "expo";

// import { Ionicons } from '@expo/vector-icons';

//library imports
import { Icon, Container, Header, Content, Left, DeckSwiper, CardItem, Card, Body, Thumbnail } from 'native-base'

//custom components imports 
import CustomHeader from './components/CustomHeader';


class HomeScreen extends Component {
    scrollX = new Animated.Value(0)

    constructor(props){
        super(props);
        this.state ={ isLoading: true, kajian: [], keprof: [], calendar: [], data: ['1', '2', '3'] }
    }
    
    componentDidMount(){
        var the_date = new Date();
        var date = the_date.getDate() > 10 ? the_date.getDate() : '0' + the_date.getDate() ;
        var month = the_date.getMonth()+1 > 10 ? the_date.getMonth() + 1 : '0' + (the_date.getMonth() + 1);
        var today = the_date.getFullYear() + '-' + month + '-' + date;   
        return fetch('https://www.googleapis.com/calendar/v3/calendars/nq9qu9k9i8rn293t3jcta0hfis@group.calendar.google.com/events?key=AIzaSyC5uONr_2I5QoCPaCl57RceiMOLr58iINY&q=' + today)
            .then((response) => response.json())
            .then((responseJson) => {

            this.setState({
                calendar : responseJson.items,
            }, function(){

            });

            })
            .then(
                fetch('http://hmt.mining.itb.ac.id/wp-json/wp/v2/posts?categories=6&per_page=1')
                    .then((response) => response.json())
                    .then((responseJson) => {
        
                    this.setState({
                        keprof: responseJson,
                    }, function(){

                    });
        
                    })
                    .catch((error) =>{
                    console.error(error);
                    })
            )
            .then(
                fetch('http://hmt.mining.itb.ac.id/wp-json/wp/v2/posts?categories=9&per_page=1')
                    .then((response) => response.json())
                    .then((responseJson) => {
        
                    this.setState({
                        kajian: responseJson,
                        isLoading: false,
                    }, function(){

                    });
        
                    })
                    .catch((error) =>{
                    console.error(error);
                    })
            )
            .catch((error) =>{
            console.error(error);
            })
            .done();
    }

    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
              source={require('../assets/home.png')}
              style={styles.icon}
            />
        ),
    })
    
    getBirthday() {
        if (this.state.calendar.length == 0) {
            return(
                <View key = {1} style = {{flex: 1, width: Dimensions.get('window').width - 5, padding: 30}} >
                    <Text style={{alignSelf: 'center', fontWeight: 'bold'}} > Tidak ada yang berulang tahun hari ini </Text>
                    <Image
                        resizeMode = 'center'
                        style={{ flex:1, width: Dimensions.get('window').width - 40 }} 
                        source={require('../assets/icon.png')}
                    />
                </View>
            )
        } else {
            return this.state.calendar.map(function(item){
                return(
                    <View key = {1} style = {{width: Dimensions.get('window').width - 5, padding: 30}} >
                        <Image
                            resizeMode = 'center'
                            style={{ flex:1, width: Dimensions.get('window').width - 40 }} 
                            source={item.description == null ? require('../assets/icon.png') : {uri: item.description}}
                        />
                    </View>
                )
            })
        }
    }
    

    getKajian() {
        return this.state.kajian.map(function(item){
            return(
                <View key = {2} style = {{width: Dimensions.get('window').width - 5, padding: 30}} >
                    <Text style = {{fontWeight: 'bold', fontSize: 20}}>
                        {item.title.rendered}
                    </Text>
                    <Text>
                        Info Kajian
                    </Text>
                    <TouchableOpacity style={{alignItems: 'center', padding: 10}} onPress={ ()=>{ Linking.openURL([item.link].toString())}}>
                        <Image
                            resizeMode = 'center'
                            style={{width: Dimensions.get('window').width - 50, height: Dimensions.get('window').width - 50 }} 
                            source={item.better_featured_image === null ? require('../assets/icon.png') : {uri: item.better_featured_image.source_url}}
                        />
                    </TouchableOpacity>
                    <HTML
                        html = {item.excerpt.rendered === '' ? '<p>Tidak ada Preview</p>\n' : item.excerpt.rendered}
                        style = {{ justifyContent:'space-between' }}
                    />
                </View>
            )
        });
    }

    getKeprof() {
        return this.state.keprof.map(function(item){
            return(
                <View key = {3} style = {{width: Dimensions.get('window').width - 5, padding: 30}} >
                    <Text style = {{fontWeight: 'bold', fontSize: 20}}>
                        {item.title.rendered}
                    </Text>
                    <Text>
                        Info Keprofesian
                    </Text>
                    <TouchableOpacity style={{alignItems: 'center', padding: 10}} onPress={ ()=>{ Linking.openURL([item.link].toString())}}>
                        <Image
                            resizeMode = 'center'
                            style={{width: Dimensions.get('window').width - 50, height: Dimensions.get('window').width - 50 }} 
                            source={item.better_featured_image === null ? require('../assets/icon.png') : {uri: item.better_featured_image.source_url}}
                        />
                    </TouchableOpacity>
                    <HTML
                        html = {item.excerpt.rendered === '' ? '<p>Tidak ada Preview</p>\n' : item.excerpt.rendered}
                        style = {{ justifyContent:'space-between' }}
                    />
                </View>
            )
        });
    }

    render() {
        if(this.state.isLoading){
            return(
                <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight, backgroundColor: 'white'}}>
                  <CustomHeader
                      title="Home"
                      drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                  />
                  <ActivityIndicator size="large" color="#B22222" style={{flex: 1, justifyContent: 'center'}} />
                </Container>
            )
        } else {
            let position = Animated.divide(this.scrollX, Dimensions.get('window').width);
            return (
                <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight, backgroundColor: 'white'}}>
                    <CustomHeader 
                        title="Home" 
                        drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} 
                    />
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true} 
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }] )} 
                    >
                        {this.getBirthday()}
                        {this.getKajian()}
                        {this.getKeprof()}
                    </ScrollView>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}
                        >
                        {this.state.data.map((_, i) => {
                            let opacity = position.interpolate({
                                inputRange: [i - 1, i, i + 1],
                                outputRange: [0.3, 1, 0.3],
                                extrapolate: 'clamp'
                            });
                            return (
                                <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
                                />
                            );
                        })}
                    </View>
                </Container>
            )
        }
    }

}

export default HomeScreen;


const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});
