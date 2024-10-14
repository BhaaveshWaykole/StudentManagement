import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const AnnouncementCard = ({ announceInfo }) => {
//   const [announcementData, setAnnouncementData] = useState('');

//   useEffect(() => {
//     const fetchAnnouncementData = async () => {
//       try {
//         const response = await axios.get(`http://your-api-url/api/teachers/${announceInfo.teacher}`);
//         setAnnouncementData(response.data.name);
//       } catch (error) {
//         console.error('Failed to fetch announcement data', error);
//       }
//     };
//     fetchAnnouncementData();
//   }, [announceInfo.id]);

  const dateTime = new Date(announceInfo.createdAt);
  const date = dateTime.toDateString();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        {/* You can navigate to the profile page here */}
        <Image source={require('../assets/profilePic.jpeg')} style={styles.profileImage} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{announceInfo.announcementData}</Text>
        <Text style={styles.timestamp}>{date}</Text>
        <Text style={styles.timestamp}>{formattedTime}</Text>
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
    marginBottom: 10,
  },
  profile: {
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
  },
  announceContent: {
    marginTop: 5,
  },
});

export default AnnouncementCard;
