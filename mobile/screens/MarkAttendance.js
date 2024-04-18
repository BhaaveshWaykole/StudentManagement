import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const MarkAttendance = ({ route }) => {
    const { classId } = route.params;
    const [students, setStudents] = useState([]);
    const [className, setClassName] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);

    useEffect(() => {
        const fetchClassInfo = async () => {
            try {
                const response = await axios.get(`http://10.24.70.217:8000/api/classroom/${classId}`);
                setClassName(response.data.name);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchStudents = async () => {
            try {
                const response = await axios.get(`http://10.24.70.217:8000/api/students/studclass/${classId}/`);
                setStudents(response.data.map(student => ({ ...student, present: false })));
            } catch (error) {
                console.error(error);
            }
        };

        fetchClassInfo();
        fetchStudents();
    }, [classId]);

    const handleDateChange = (event, date) => {
        if (Platform.OS === 'android') {
            setShowDatePicker(false);
        }
        if (date) {
            setSelectedDate(date);
        }
    };

    const handleCheckboxChange = (index) => {
        const updatedStudents = [...students];
        updatedStudents[index].present = !updatedStudents[index].present;
        setStudents(updatedStudents);
    };

    const handleSubmit = async () => {
        try {
            const attendanceData = {
                cId: classId,
                date: selectedDate.toISOString().split('T')[0],
                studentPresent: students.filter(student => student.present).map(student => student._id)
            };
            await axios.post('http://192.168.29.199:8000/api/attendance/regAttendance/', attendanceData);
            console.log("Attendance submitted for date:", selectedDate);
            setError(null);
            setSuccessMessage("Attendance submitted successfully.");
        } catch (error) {
            setSuccessMessage(null);
            if (error.response && error.response.status === 503) {
                setError("Attendance already exists for the date!");
            } else {
                console.error("Error submitting attendance:", error);
            }
        }
    };

    return (
        <View style={styles.container}>
            {error && <Text style={styles.errorText}>{error}</Text>}
            {successMessage && <Text style={styles.successText}>{successMessage}</Text>}
            <Text style={styles.headerText}>
                Mark Attendance for {className}
            </Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
                <Text style={styles.datePickerText}>{selectedDate.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}
            {students.map((student, index) => (
                <View key={student._id} style={styles.studentRow}>
                    <Text style={styles.studentInfo}>{student.prn} - {student.username}</Text>
                    <TouchableOpacity onPress={() => handleCheckboxChange(index)} style={styles.checkbox}>
                        <Text style={styles.checkboxText}>{student.present ? 'Present' : 'Absent'}</Text>
                    </TouchableOpacity>
                </View>
            ))}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center'
    },
    successText: {
        color: 'green',
        marginBottom: 10,
        textAlign: 'center'
    },
    datePickerButton: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
        alignItems: 'center'
    },
    datePickerText: {
        fontSize: 18
    },
    studentRow: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center'
    },
    studentInfo: {
        flex: 1,
        fontSize: 16
    },
    checkbox: {
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#ccc'
    },
    checkboxText: {
        fontSize: 16
    },
    submitButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center'
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18
    }
});

export default MarkAttendance;
