import React, { useRef, useState } from 'react';
import { View, Text, Image, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const data = [
    { id: '1', title: 'Title 1', image: 'https://images.unsplash.com/photo-1636761358783-209512dccd98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1lY2hhbmljfGVufDB8fDB8fHww' },
    { id: '2', title: 'Title 2', image: 'https://images.unsplash.com/photo-1636761358757-0a616eb9e17e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1lY2hhbmljfGVufDB8fDB8fHww' },
    { id: '3', title: 'Title 3', image: 'https://images.unsplash.com/photo-1599256630445-67b5772b1204?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1lY2hhbmljfGVufDB8fDB8fHww' },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList<any>>(null);

    const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any[] }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = useRef({
        viewAreaCoveragePercentThreshold: 50
    }).current;

    const scrollToIndex = (index: number) => {
        flatListRef.current?.scrollToIndex({ index });
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                )}
                horizontal
                pagingEnabled
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />
            <View style={styles.tabContainer}>
                {data.map((_, index) => (
                    <TouchableOpacity key={index} onPress={() => scrollToIndex(index)}>
                        <View style={[styles.tab, currentIndex === index && styles.tabActive]} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    item: {
        width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width * 0.9,  // Adjust width as needed
        height: 200,
        resizeMode: 'cover',  // Ensures the image covers the space and crops if needed
        borderRadius: 10,
        marginHorizontal: 10,  // Adds spacing between images
    },
    title: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',  // Center-align the title text
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    tab: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ddd',
        marginHorizontal: 5,
    },
    tabActive: {
        backgroundColor: '#FF6347', // Or any color for the active tab
    },
});

export default Carousel;