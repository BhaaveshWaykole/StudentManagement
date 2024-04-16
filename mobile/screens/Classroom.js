import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import ClassNavbar from './classMaterial/ClassNavbar.js';
import AnnouncementCard from './announcementsMaterial/AnnouncementCard.js';
import { useRef, useState } from 'react'
const Clasroom = () => {
    const [announcementTitle, setAnnouncementTitle] = useState('');
    const [announcementContent, setAnnouncementContent] = useState('');
    const announcements = [
        {
            key: '1',
            teacher: 'Teacher A',
            createdAt: '2024-04-18T08:00:00Z',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            key: '2',
            teacher: 'Teacher B',
            createdAt: '2024-04-17T10:30:00Z',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            key: '3',
            teacher: 'Teacher C',
            createdAt: '2024-04-16T15:45:00Z',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
    ];

    const handlePost = () => {
        console.log(announcementContent)
        // const content = announcementRef.current.value
        // const title = announcementTitleRef.current.value
        // await axios.post("/api/announcement/regAnnouncement", { content, cId: classId, teacher: teacher._id, title })
    }
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <ClassNavbar />
            </View>
            <View style={styles.mainName}>
                <Text style={styles.className}>Name</Text>
                <View style={styles.teacherInfo}>
                    <Text>Batch</Text>
                    <Text>Teacher</Text>
                </View>
            </View>
            <View style={styles.announcements}>
                <Text style={styles.announcementsHeader}>Announcements</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Title'
                    value={announcementTitle}
                    onChangeText={setAnnouncementTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Post Announcement here'
                    value={announcementContent}
                    onChangeText={setAnnouncementContent}
                />
                <TouchableOpacity style={styles.postButton} onPress={handlePost}>
                    <Text style={styles.buttonText}>Post</Text>
                </TouchableOpacity>
                <ScrollView>
                    {announcements.map((announcementItem) => (
                        <TouchableOpacity
                            style={styles.announcementCard}
                            key={announcementItem.key}
                        // onPress={() => goToAnnouncement(announcementItem.key)}
                        >
                            <AnnouncementCard announceInfo={announcementItem} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    navbar: {
        marginBottom: 10,
    },
    mainName: {
        backgroundColor: '#ffcc00',
        padding: 10,
    },
    className: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    teacherInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    announcements: {
        flex: 1,
        padding: 10,
    },
    announcementsHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    postButton: {
        backgroundColor: '#00aa00',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    announcementCard: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
});

export default Clasroom;
