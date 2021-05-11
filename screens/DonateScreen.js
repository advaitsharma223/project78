import React, { Component } from 'react';
import { View, StyleSheet, Text, Image,
   TouchableOpacity,TextInput, Alert, Modal,
    ScrollView, KeyboardAvoidingView } from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class DonateScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Donate Screen</Text>
            </View>
        );
    }
}