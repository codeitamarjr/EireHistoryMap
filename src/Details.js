import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import EireList from './EireList';


export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <EireList />;
    }
}
