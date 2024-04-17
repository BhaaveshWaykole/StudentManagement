import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation, useParams } from '@react-navigation/native';

const ClassNavbar = () => {
    const classId = "661135e85dcd40e5d00fa5ec";
    const navigation = useNavigation();
    const AttendanceCardNav = () => {
        // Define what happens when AttendanceCard is clicked
        navigation.navigate('MarkAttendance', { classId });
        console.log('AttendanceCardNav')
    };

    const studentList = () => {
        // Define what happens when Student List is clicked
        console.log(classId);
        navigation.navigate('StudentList', { classId });
        console.log('studentList')
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={AttendanceCardNav}>
                <Text style={styles.buttonText}>Attendance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={studentList}>
                <Text style={styles.buttonText}>Students</Text>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    button: {
        backgroundColor: '#888',
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ClassNavbar;
