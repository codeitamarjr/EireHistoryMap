import React, { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: "bold",
    },
    name: {
        fontSize: 18,
    },
    description: {
        fontSize: 14,
        color: "gray",
    },
    box: {
        padding: 10,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 7,
        resizeMode: "cover",
    },
    image: {
        width: 350,
        height: 100,
        borderRadius: 7,
    },
});

export default function EireList() {
    // Create a state variable to hold the data
    const [data, setData] = useState([]);
    // Create a state variable to hold the loading state
    const [loading, setLoading] = useState(true);

    // Fetch the data from the API
    const fetchData = async () => {
        const resp = await fetch("https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json");
        // Convert the data to JSON
        const data = await resp.json();
        // Set the data to the state
        setData(data);
        // Set loading to false
        setLoading(false);
    };

    // Render the data as a list item
    const renderItem = ({ item }) => {
        return (
            // Loop through the data and create a box for each item
            <TouchableOpacity>
                <Box style={styles.box} >
                    <Image style={styles.image} source={{ uri: 'https://picsum.photos/300/200' }} />
                    <Text style={styles.title}>Name: {item.name}</Text>
                    {item.gaelic_name ? <Text>Gaelic Name: {item.gaelic_name}</Text> : null}
                    <Text style={styles.description}>Latitude: {item.latitude}</Text>
                    <Text style={styles.description}>Longitude: {item.longitude}</Text>
                </Box>
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <NativeBaseProvider>
            {loading && <Box>Loading..</Box>}
            {data && (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </NativeBaseProvider>
    );
}