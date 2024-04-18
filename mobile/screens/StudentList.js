import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const StudentList = () => {
  const route = useRoute();
  const { classId } = route.params;

  const [students, setStudents] = useState([]);
  const [className, setClassName] = useState('');

  useEffect(() => {
    const fetchClassInfo = async () => {
      try {
        const classResponse = await fetch(`http://10.24.70.217:8000/api/classroom/${classId}`);
        const classData = await classResponse.json();
        setClassName(classData.name);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchStudents = async () => {
      try {
        const studentsResponse = await fetch(`http://10.24.70.217:8000/api/students/studclass/${classId}/`);
        const studentsData = await studentsResponse.json();
        // Ensure studentsData is an array before setting state
        if (Array.isArray(studentsData)) {
          setStudents(studentsData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchClassInfo();
    fetchStudents();
  }, [classId]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Students in {className}</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableHeader, styles.columnHeader]}>Name</Text>
          <Text style={[styles.tableHeader, styles.columnHeader]}>PRN</Text>
        </View>
        {students && students.map((student, index) => (
          <View key={student._id} style={[styles.tableRow, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
            <Text style={[styles.tableCell, styles.cell]}>{student.username}</Text>
            <Text style={[styles.tableCell, styles.cell]}>{student.prn}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 40,
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    table: {
      borderWidth: 1,
      borderColor: 'black',
      width: '80%',
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    columnHeader: {
      backgroundColor: '#333',
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      flex: 1, // Equal width for both columns
    },
    evenRow: {
      backgroundColor: '#f2f2f2',
    },
    oddRow: {
      backgroundColor: '#e6e6e6',
    },
    cell: {
      textAlign: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      flex: 1, // Equal width for both columns
    },
  });
  
export default StudentList;
