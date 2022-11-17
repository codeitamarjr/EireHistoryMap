import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


export default class MarkerDetails extends Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>New</Text>
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}