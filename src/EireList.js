import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";
import MapView, { Callout, Marker } from 'react-native-maps';


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
            <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
                <Text>Name: {item.name}</Text>
                {item.gaelic_name ? <Text>Gaelic Name: {item.gaelic_name}</Text> : null}
                <Text>Type: {item.place_type_id}</Text>
                <Text>Latitude: {item.latitude}</Text>
                <Text>Longitude: {item.longitude}</Text>
            </Box>
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <Box> List of Historical Points</Box>
                {loading && <Box>Loading..</Box>}
                {data && (
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                )}
            </Center>
        </NativeBaseProvider>
    );
}