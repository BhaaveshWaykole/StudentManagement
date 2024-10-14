import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ClassCard from './classMaterial/ClassCard.js'; // Assuming ClassCard component is defined in a separate file
// import Navbar from './Navbar'; // Assuming Navbar component is defined in a separate file

const Home = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.classContainer}>
                    {classes.map((classItem) => (
                        <TouchableOpacity
                            key={classItem._id}
                            // onPress={() => goToClassroom(classItem._id)}
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
