import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import ClassNavbar from './classMaterial/ClassNavbar.js';
import AnnouncementCard from './announcementsMaterial/AnnouncementCard.js';
import { useRef, useState, useEffect } from 'react'
import { useNavigation} from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios'; // Import axios

const Clasroom = () => {
    

  const [classInfo, setClassInfo] = useState({});
  const [announcements, setAnnouncements] = useState([]);
  const [announcementTitle, setAnnouncementTitle] = useState('');
  const [announcementContent, setAnnouncementContent] = useState('');

  const [teacher, setTeacherName] = useState([]);
  const announcementRef = useRef();
  const announcementTitleRef = useRef();
  const route = useRoute();

  // Access the params object to get the classId
  const { classId } = route.params;

  const handlePost = async (req, res) => {
    const content = announcementContent;
    const title = announcementTitle;
    
    await axios.post("http://192.168.29.199:8000/api/announcement/regAnnouncement", {content, cId : classId, teacher : teacher._id, title})
  }
  
  
  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        // console.log("HI", classId)
        // console.log("HI", classId)
        const response = await axios.get(`http://192.168.29.199:8000/api/classroom/${classId}`);
        setClassInfo(response.data);
        // console.log(response.data)
        // console.log(response.data)
      } catch (error) {
        console.error('Failed to fetch class details', error);
      }
    };
    fetchClassDetails();
  }, [classId]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(`http://192.168.29.199:8000/api/announcement/${classId}`);
        console.log(response.data)
        setAnnouncements(response.data);
      } catch (error) {
        console.error('Failed to fetch announcements', error);
      }
    };

    fetchAnnouncements();
  }, [classId,announcementTitle]);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await axios.get(`http://192.168.29.199:8000/api/teachers/teacherName/${classId}`);
        setTeacherName(response.data[0]);
      } catch (error) {
        console.error('Failed to fetch teacher', error);
      }
    };

    fetchTeacher();
  }, [classInfo.teachers]);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await axios.get(`http://192.168.29.199:8000/api/teachers/teacherName/${classId}`);
        setTeacherName(response.data[0]);
      } catch (error) {
        console.error('Failed to fetch teacher', error);
      }
    };

    fetchTeacher();
  }, [classInfo.teachers]);

  const goToAnnouncement = (announcementId) => {
    console.log(announcementId);
    // Implement navigation or other logic as needed
  };



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
                    ref={announcementTitleRef}
                    style={styles.input}
                    placeholder='Title'
                    value={announcementTitle}
                    onChangeText={setAnnouncementTitle}
                />
                <TextInput 
                    ref={announcementRef}
                    style={styles.input}
                    placeholder='Post Announcement here'
                    value={announcementContent}
                    onChangeText={setAnnouncementContent}
                />
                <TouchableOpacity style={styles.postButton} onPress={handlePost}>
                    <Text style={styles.buttonText}>Post</Text>
                </TouchableOpacity>
                <ScrollView>
                <ScrollView>
                    {announcements.map((announcementItem) => (
                        <TouchableOpacity
                            style={styles.announcementCard}
                            key={announcementItem._id} // Assuming _id is the unique identifier of each announcement
                        >
                            <AnnouncementCard announceInfo={announcementItem} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>

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
