import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useParams } from '@react-navigation/native';

function ClassNavbar() {
  const { classId } = "661135e85dcd40e5d00fa5ec";
  const navigation = useNavigation();

  // const navigateToAttendanceCard = () => {
  //   navigation.navigate('MarkAttendance', { classId });
  // };
  
  const navigateToStudentList = () => {
    console.log("Shreya");
    navigation.navigate('StudentList', { classId });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} /*onPress={navigateToAttendanceCard}*/>
        <Text style={styles.buttonText}>Attendance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToStudentList}>
        <Text style={styles.buttonText}>Students</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#888',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 7,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
};

export default ClassNavbar;
