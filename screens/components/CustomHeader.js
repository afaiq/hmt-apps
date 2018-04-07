import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base';

import { Dimensions, Platform, PixelRatio } from 'react-native';

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


class CustomHeader extends Component {
    render() {
        return (
            <Header style={{backgroundColor:'#B22222'}} >
                <Left style={{flex: 1}} ><Icon name="ios-menu" onPress={() => this.props.drawerOpen()} /></Left>
                <Body style={{flex: 1, alignItems:'center', justifyContent: 'center'}} >
                    <Title style={{fontSize: normalize(20) }} > {this.props.title} </Title>
                </Body>
                <Right />
            </Header>
        );
    }
}
export default CustomHeader;

const styles = StyleSheet.create({
    
  });