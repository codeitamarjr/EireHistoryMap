import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
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
            <Text>Home Screen</Text>
            <Button
                title="Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
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
