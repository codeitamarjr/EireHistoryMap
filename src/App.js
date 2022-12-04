import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import EireMap from './EireMap';
import Details from './Details';
import MarkerDetails from './MarkerDetails';


const Tab = createBottomTabNavigator();
const myIcon = <Icon size={30} color="#900" />;

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1543191878-f6a3e470454e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" }} resizeMode="cover" style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
            }} >
                <Text style={{
                    textAlign: 'center',
                    fontSize: 30,
                    color: 'white'
                }}>Éire Historical Map</Text>
                <View style={{
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    width: '90%',
                    height: '60%',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    borderRadius: 10,
                    padding: 10
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        color: 'black'
                    }}>This is the home screen</Text>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                    }}>Éire History Map App it is a map of Ireland with historical markers on it. The markers are clickable and will display information about the historical event that took place at that location.</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 30
                    }}>
                        <ImageBackground source={{ uri: "https://www.itjunior.dev/assets/images/me.webp" }} style={{
                            width: 70,
                            height: 70,
                        }} />
                        <Text style={{
                            fontSize: 18,
                            padding: 10
                        }}>This app was created by Itamar Junior, a student at the Dorset College Dublin for the Mobile Application Development module.</Text>
                    </View>
                </View>
            </ImageBackground>
        </View >
    );
}

function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: false,
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Button
                        onPress={() => this.setState({ profile: !this.state.profile })}
                        title="Toogle Profile" />
                </View>
                <View style={{ flex: 1 }}>
                    <NavigationContainer>
                        <Button
                            onPress={() => this.setState({ profile: !this.state.profile })}
                            title="Toogle Profile" />
                        <Tab.Navigator>
                            <Tab.Screen
                                options={{
                                    tabBarIcon: ({ color, size }) => (
                                        <Icon name="home" color={color} size={size} />
                                    ),
                                }}
                                name="Home"
                                component={HomeScreen} />

                            <Tab.Screen
                                options={{
                                    tabBarIcon: ({ color, size }) => (
                                        <Icon name="map" color={color} size={size} />
                                    ),
                                }}
                                name="Éire Historical Map"
                                component={EireMap} />

                            <Tab.Screen
                                options={{
                                    tabBarIcon: ({ color, size }) => (
                                        <Icon name="list" color={color} size={size} />
                                    ),
                                }}
                                name="Details"
                                component={Details} />

                            {this.state.profile &&
                                <Tab.Screen
                                    options={{
                                        tabBarIcon: ({ color, size }) => (
                                            <Icon name="user" color={color} size={size} />
                                        ),
                                    }}
                                    name="Profile"
                                    component={ProfileScreen} />}

                        </Tab.Navigator>
                    </NavigationContainer>
                </View>
            </View>
        );
    }
}
