import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import EireList from './EireList';
import { useRoute } from '@react-navigation/native';

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: "bold",
    },
    description: {
        fontSize: 14,
        color: "gray",
    },
    image: {
        width: 350,
        height: 100,
        borderRadius: 7,
    },
});

export default class Details extends Component {
    getImageFromUnsplash = (keyWord) => {
        const API = 'h_hlvlx_cVGdk9zIe0qqAQ9OIeR0-gFCK1k8lpNKA3o';
        const url = `https://api.unsplash.com/search/photos?query=${keyWord}&client_id=${API}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.results.length > 0) {
                    urlImage = data.results[0].urls.raw;
                }
                // console.log(data.results[0].urls.raw);
                this.setState({ urlImage: urlImage });
            })
    }

    constructor(props) {
        super(props);
        // console.log(props.route.params);
        this.state = {
            params: props.route.params,
            urlImage: 'https://picsum.photos/300/200',
        };
        this.getImageFromUnsplash(this.state.params.marker.name);
    }

    render() {
        const marker = this.props.route.params.marker;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.title}>Details Screen:</Text>
                <Image style={styles.image} source={{ uri: this.state.urlImage }} />
                <Text style={styles.title}>{marker.name}</Text>
                <Text style={styles.description}>{marker.gaelic_name}</Text>
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}
