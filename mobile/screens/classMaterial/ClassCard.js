import React, { useRef } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';

const ClassCard = ({ classInfo }) => {

    return (
        <View style={styles.card}>
            <View style={styles.textContent}>
                <Text style={styles.className}>{classInfo.className}</Text>
                <Text style={styles.teacherName}>{classInfo.teachers}</Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ url: '' }}
                        style={styles.classImage}
                        accessibilityLabel="Class card picture"
                    />
                </View>
                {/* Example of adding assignments, hidden by default
                <View style={styles.assignments}>
                    <Text>Assignment 1</Text>
                    <Text>Assignment 2</Text>
                    <Text>Assignment 3</Text>
                </View>
                */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 216, // Converted from Tailwind's h-54 (assuming 1 unit = 4)
        width: 256, // Converted from Tailwind's w-64
        backgroundColor: '#F97316', // bg-orange-400
        padding: 12, // p-3
        margin: 20, // m-5
        borderRadius: 24, // rounded-rnd-6p (arbitrary conversion)
    },
    textContent: {
        textAlign: 'left',
    },
    className: {
        fontWeight: '500', // font-poppins-500
        backgroundColor: '#EF4444', // bg-red-500
        fontSize: 24, // text-xl

    },
    teacherName: {
        fontWeight: '400', // font-poppins-200
    },
    imageContainer: {
        backgroundColor: '#FFFFFF', // bg-white
        borderRadius: 8, // rounded-rnd-2p (arbitrary conversion)
        padding: 8, // p-2
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    classImage: {
        borderRadius: 50, // rounded-full
        borderWidth: 2, // border-2
        borderColor: '#000000', // border-black
        marginTop: 4, // mt-1
        height: 48, // h-12
        width: 48, // w-12
    },
    // Example style for assignments (if used)
    assignments: {
        marginTop: 12,
    }
});

export default ClassCard