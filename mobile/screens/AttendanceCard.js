import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
// import { useRoute } from '@react-navigation/native';

function AttendanceCard() {
    const [attendanceData, setAttendanceData] = useState([]);
    // const route = useRoute();

    // useEffect(() => {
    //     const fetchAttendanceData = async () => {
    //         try {
    //             const response = await axios.get(`/api/attendance/${route.params.classId}`);
    //             setAttendanceData(response.data);
    //         } catch (error) {
    //             console.error('Failed to fetch attendance data', error);
    //         }
    //     };
    //     fetchAttendanceData();
    // }, [route.params.classId]);

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.date}>{item.date}</Text>
            <Text>Number of students present: {item.presentCount}</Text>
        </View>
    );

    return (
        <FlatList
            data={attendanceData}
            renderItem={renderItem}
            keyExtractor={(item) => item.date}
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    date: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default AttendanceCard;
