import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios'; // Import axios
import ClassCard from './classMaterial/ClassCard.js'; // Assuming ClassCard component is defined in a separate file
// import Navbar from './Navbar'; // Assuming Navbar component is defined in a separate file
import { useNavigation} from '@react-navigation/native';

import { useAuth } from '../context/AuthContext';

const Home = () => {
    const [classes, setClasses] = useState([]);
    const navigation = useNavigation();
    const goToClassroom = (classId) => {
        console.log(classId);
        navigation.navigate('Classroom', { classId });
      };
      const { user } = useAuth();
    useEffect(() => {
        const fetchClasses = async () => {
            try {
                if (user) {
                  // console.log("HI start")
                  let endpoint;
                  if (user.userType === 'student') {
                    endpoint = `http://10.24.70.217:8000/api/students/class/${user._id}`;
                    // console.log("HI student")
                  } else if (user.type === 'faculty') {
                    endpoint = `http://10.24.70.217:8000/api/faculty/class/${user._id}`;
                    // console.log("HI teacher")
                  }
        
                  if (endpoint) {
                    const response = await axios.get(endpoint);
                    console.log("HI res")
                    setClasses(response.data);
                  }
                }
              } catch (error) {
                console.error('Failed to fetch classes', error);
              }
            };
        
            fetchClasses();
          }, [user]);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.classContainer}>
                    {classes.map((classItem) => (
                        <TouchableOpacity
                            key={classItem._id}
                            onPress={() => goToClassroom(classItem._id)}
                            style={styles.classCard}
                        >
                            <ClassCard
                                classInfo={{
                                    key: classItem._id,
                                    className: classItem.name,
                                    teachers: classItem.teachers,
                                    students: classItem.students,
                                }}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    classContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    classCard: {
        margin: 5, // Adjust margin as needed
    },
});

export default Home;
