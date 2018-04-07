import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Platform, StatusBar } from 'react-native';
import * as Expo from 'expo';

import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen'
import KeprofScreen from './screens/KeprofScreen'
import KajianScreen from './screens/KajianScreen'
import BeasiswaScreen from './screens/BeasiswaScreen'
import OSDScreen from './screens/OSDScreen'
import KatalogScreen from './screens/KatalogScreen'
import ISMCScreen from './screens/ISMCScreen'
import AnggotaScreen from './screens/AnggotaScreen'
import PrestasiScreen from './screens/PrestasiScreen'
import AlumniScreen from './screens/AlumniScreen'
import AboutScreen from './screens/AboutScreen';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <MyApp style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}} />
    );
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/hmt-itb.png')}
          resizeMode='center' />
      </Body>
    </Header>
    <Content style={{backgroundColor:'#660202'}} >
      <DrawerItems {...props} />
    </Content>

  </Container>

);

const MyApp = DrawerNavigator({
    // For each screen that you can navigate to, create a new entry like this:
    Home: {
      screen: HomeScreen,
    },
    Event: {
      screen: EventScreen
    },
    Keprof: {
      screen: KeprofScreen
    },
    Kajian: {
      screen: KajianScreen
    },
    Beasiswa: {
      screen: BeasiswaScreen
    },
    OSD: {
      screen: OSDScreen
    },
    Katalog: {
      screen: KatalogScreen
    },
    ISMC: {
      screen: ISMCScreen
    },
    Anggota: {
      screen: AnggotaScreen
    },
    Prestasi: {
      screen: PrestasiScreen
    },
    Alumni: {
      screen: AlumniScreen
    },
    About: {
      screen: AboutScreen
    }
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    backgroundColor: '#FF0000',
    contentOptions: {
      activeTintColor: '#F08080',
      inactiveTintColor: '#ffffff'
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 150,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  drawerImage: {
    flex: 1,
    height: 100,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
