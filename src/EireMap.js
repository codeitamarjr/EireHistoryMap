import { Button } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Callout, Marker } from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default class EireMap extends Component {
    // Start of markerList and typeList
    state = { markerList: [], typeList: [] }

    // Fetches the list of markers from JSON address
    componentDidMount() {
        fetch('https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json')
            .then(res => res.json())
            .then(placesData => {
                this.setState({ markerList: placesData })
            }).catch(console.error);
        fetch('https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/place_types.json')
            .then(res => res.json())
            .then(typesData => {
                this.setState({ typeList: typesData })
            }).catch(console.error)
    }

    // Returns the type of marker from the typeList based on the type_id from the markerList
    getMarkerType(type_id) {
        return this.state.typeList.map((type) => {
            if (type.id === type_id) {
                return type.name;
            }
        })
    }

    // Define a different colour for each type of marker
    getMarkerColour(type_id) {
        switch (type_id) {
            case 1:
                return 'red';
            case 2:
                return 'blue';
            case 3:
                return 'green';
            case 4:
                return 'yellow';
            case 5:
                return 'purple';
            case 6:
                return 'orange';
            case 7:
                return 'pink';
            case 8:
                return 'brown';
            case 9:
                return 'black';
            case 10:
                return 'maroon';
            case 11:
                return 'white';
            case 12:
                return 'cyan';
            case 13:
                return 'magenta';
            case 14:
                return 'lime';
            case 15:
                return 'teal';
            default:
                return 'grey';
        }
    }

    // Maps each marker in the list to a Marker component called singleMarker
    mapMarkers = () => {
        return this.state.markerList.map((singleMarker) =>
            <Marker
                pinColor={
                    this.getMarkerColour(singleMarker.place_type_id)
                }
                key={singleMarker.id}
                coordinate={{ latitude: singleMarker.latitude, longitude: singleMarker.longitude }}
                title={singleMarker.name}
                onCalloutPress={() => this.props.navigation.navigate('Details', { marker: singleMarker })}
            >
                <Callout>
                    <Text style={{ fontSize: 20, color: 'green' }}>{this.getMarkerType(singleMarker.place_type_id)} |
                        <Text style={{ fontSize: 20, color: 'red' }}> {singleMarker.name}</Text></Text>
                    {singleMarker.gaelic_name ? <Text style={{ fontSize: 20, color: 'blue' }}>Gaelic name: {singleMarker.gaelic_name}</Text> : null}
                    <Text style={{ fontSize: 15, color: 'gray' }}>Coordinates:</Text>
                    <Text style={{ fontSize: 15, color: 'gray' }}>{singleMarker.latitude}, {singleMarker.longitude}</Text>
                    <View>
                        <Image
                            style={{ width: 300, height: 100, marginTop: 10, marginBottom: 10, backgroundMode: 'contain', borderRadius: 10 }}
                            source={{ uri: 'https://picsum.photos/300/200' }} />
                        <Text>More info</Text>
                    </View>
                </Callout>
            </Marker >)
    }

    render() {
        // Render the map with the markers from mapMarkers() above
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 53.3498,
                        longitude: -6.2603,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    {this.mapMarkers()}
                </MapView>
            </View>
        );
    }
}
