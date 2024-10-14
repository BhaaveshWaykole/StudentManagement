import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import Navbar from './Navbar'; // Assuming Navbar component is defined in a separate file

const AnnouncementCard = ({ announceInfo }) => {
    const dateTime = new Date(announceInfo.createdAt);
    const date = dateTime.toDateString();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const seconds = dateTime.getSeconds();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    source={{ url: '' }}
                    style={styles.profilePic}
                />
            </View>
            <View style={styles.content}>
                <View>
                    <Text style={styles.teacherName}>{announceInfo.teacher}</Text>
                    <Text style={styles.dateTime}>{date} {formattedTime}</Text>
                </View>
                <View style={styles.announceContent}>
                    <Text>{announceInfo.content}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profile: {
        marginRight: 10,
    },
    profilePic: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderColor: "black",
    },
    teacherName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    dateTime: {
        fontSize: 12,
        color: 'gray',
    },
    announceContent: {
        marginTop: 5,
    },
    content :{
        display : 'flex',
        flex: 1,
    }
});
export default AnnouncementCard;