import React, { useRef, useState } from 'react';
import { View, Text, Image, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const data = [
    { id: '1', image: 'https://images.unsplash.com/photo-1636761358783-209512dccd98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1lY2hhbmljfGVufDB8fDB8fHww' },
    { id: '2', image: 'https://images.unsplash.com/photo-1636761358757-0a616eb9e17e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1lY2hhbmljfGVufDB8fDB8fHww' },
    { id: '3', image: 'https://images.unsplash.com/photo-1599256630445-67b5772b1204?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1lY2hhbmljfGVufDB8fDB8fHww' },
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
                        {/* <Text style={styles.title}>{item.title}</Text> */}
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
    image: {
        width: width * 0.9,  // 90% of the screen width
        height: 200,         // Fixed height for uniformity
        resizeMode:'cover',  // Ensures the image covers the space and crops the excess
        borderRadius: 0,     // Rounded corners for aesthetics
        left:15,
    },
    // title: {
    //     marginTop: 10,
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    // },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    tab: {
        width: 30,
        height: 3,
        borderRadius: 5,
        backgroundColor: '#ACA7A6',
        marginHorizontal: 5,
    },
    tabActive: {
        backgroundColor: '#FF3131',  // Active tab indicator color
    },
});

export default Carousel;